const { Novu } = require("@novu/node");
const novu = new Novu("fe365d89231180940e0b0f2479a5dbcd");

const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 4000;

const users = [];

// Almacena todos los posts creados
const threadList = [];

const generateID = () => Math.random().toString(36).substring(2, 10);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Prueba de una api
app.get("/api", (req, res) => {
    res.json({
        message: "Hola mundo",
    });
});

//  Devuelve todos los post
app.get("/api/all/threads", (req, res) => {
    res.json({
        threads: threadList,
    });
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

// Acepta y almacena las credenciales de usuario y muestra una respuesta al frontend. 
app.post("/api/register", async (req, res) => {
    const { email, password, username } = req.body;

    // Esta variable almacena la id de usuario, para controlar su sesión
    const id = generateID();
    console.log({ email, password, username, id })

    //Verifica que no hayan usuarios ya registrados con las mismas credenciales antes de guardar los datos en la BD
    const result = users.filter(
        (user) => user.email === email && user.password === password
    );

    if (result.length === 0) {
        const newUser = { id, email, password, username };

        // Se crea un suscriptor de Novu usando el id e email de usuario
        await novu.subscribers.identify(id, { email: email });

        users.push(newUser);
        return res.json({
            message: "Cuenta creada exitosamente",
        });
    }

    res.json({
        error_message: "El usuario ya existe",
    });
});


// Ruta que acepta el email y contraseña y autentica al usuario, para luego concederle acceso a la aplicación
app.post("/api/login", (req, res) => {
    const { email, password } = req.body;
    let result = users.filter(
        (user) => user.email === email && user.password === password
    );

    if (result.length !== 1) {
        return res.json({
            error_message: "Credenciales incorrectas",
        });
    }

    res.json({
        message: "Inicio de sesión exitoso",
        id: result[0].id,
    });
});

//Ruta que acepta el titulo e id de usuario
app.post("/api/create/thread", async (req, res) => {
    const { thread, userId } = req.body;
    const threadId = generateID();

    console.log({ thread, userId, threadId });

    // Se acepta el id del usuario y el título del post 
    // desde el frontend, luego, almacena un objeto que 
    // contiene los detalles del post y regresa un respuesta 
    // con todos los posts almacenados

    // Añade los detalles del post
    threadList.unshift({
        id: threadId,
        title: thread,
        userId,
        replies: [],
        likes: [],
    });

    await novu.topics.create({
        key: threadId,
        name: thread,
    });

    await novu.topics.addSubscribers(threadId, {
        subscribers: [userId],
        // puedo reemplazarlo con mi id de suscriptor de Novu para testear
    });

    // Regresa una respuesta que contiene los posts
    res.json({
        message: "¡Post creado exitosamente!",
        threads: threadList,
    });
});

// Acepta el id del post, id de usuario y respuesta(comentario)
// desde el frontend, busca al post por id, y luego añade el id
// de usuario, username y respuesta a los comentarios del post
app.post("/api/create/reply", async (req, res) => {
    const { id, userId, reply } = req.body;
    const result = threadList.filter((thread) => thread.id === id);
    const user = users.filter((user) => user.id === userId);

    result[0].replies.unshift({ name: user[0].username, text: reply });

    await novu.trigger("topicnotification", {
        to: [{ type: "Topic", topicKey: id }],
    });

    res.json({
        message: "¡Comentario añadido correctamente!",
    });
});

// Acepta el id del post y el id del usuario del frontend y busca el post que
// recibió una reacción. Valida la reacción y añade al usuario al array de likes
app.post("/api/thread/like", (req, res) => {
    const { threadId, userId } = req.body;
    const result = threadList.filter((thread) => thread.id == threadId);
    const threadLikes = result[0].likes;
    const authenticateReaction = threadLikes.filter((user) => user === userId);

    if (authenticateReaction.length === 0) {
        threadLikes.push(userId);
        return res.json({
            message: "¡Has reaccionado al post!",
        });
    }

    res.json({
        error_message: "¡Solo puedes reaccionar una vez!"
    })
})

app.post("/api/thread/replies", (req, res) => {
    const { id } = req.body;
    const result = threadList.filter((thread) => thread.id === id);

    res.json({
        replies: result[0].replies,
        title: result[0].title,
    });
});
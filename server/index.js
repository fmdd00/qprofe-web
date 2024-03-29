const express = require("express");
const { Novu } = require("@novu/node");
const novu = new Novu("fe365d89231180940e0b0f2479a5dbcd");
const cors = require("cors");
const app = express();
const PORT = 4000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const users = [];
const threadList = [];

const generateID = () => Math.random().toString(36).substring(2, 10);

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
		message: "Logueo exitoso",
		id: result[0].id,
	});
});

app.post("/api/register", async (req, res) => {
	const { email, password, username } = req.body;
	const id = generateID();
	const result = users.filter(
		(user) => user.email === email && user.password === password
	);

	if (result.length === 0) {
		const newUser = { id, email, password, username };
		await novu.subscribers.identify(id, { email });

		users.push(newUser);
		return res.json({
			message: "Cuenta creada exitosamente",
		});
	}
	res.json({
		error_message: "El usuario ya existe",
	});
});

app.post("/api/create/thread", async (req, res) => {
	const { thread, userId } = req.body;
	let threadId = generateID();
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
	 });

	res.json({
		message: "Post creado exitosamente",
		threads: threadList,
	});
});

app.get("/api/all/threads", (req, res) => {
	res.json({
		threads: threadList,
	});
});

app.post("/api/thread/like", (req, res) => {
	const { threadId, userId } = req.body;
	const result = threadList.filter((thread) => thread.id === threadId);
	const threadLikes = result[0].likes;

	const authenticateReaction = threadLikes.filter((user) => user === userId);

	if (authenticateReaction.length === 0) {
		threadLikes.push(userId);
		return res.json({
			message: "Has reaccionado al post",
		});
	}
	res.json({
		error_message: "Solo puedes reaccionar una vez",
	});
});

app.post("/api/thread/replies", (req, res) => {
	const { id } = req.body;
	const result = threadList.filter((thread) => thread.id === id);
	res.json({
		replies: result[0].replies,
		title: result[0].title,
	});
});

app.post("/api/create/reply", async (req, res) => {
	const { id, userId, reply } = req.body;
	const result = threadList.filter((thread) => thread.id === id);
	const username = users.filter((user) => user.id === userId);
	result[0].replies.unshift({ name: username[0].username, text: reply });

	 await novu.trigger("topicnotification", {
	 	to: [{ type: "Topic", topicKey: id }],
	 });

	res.json({
		message: "Respuesta agregada",
	});
});

app.listen(PORT, () => {
	console.log(`Server listening on ${PORT}`);
});
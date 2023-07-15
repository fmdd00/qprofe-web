import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// Muestra un form que acepta el usuario y contraseña, corroborando con el backend y la BD
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ email, password });
        setEmail("");
        setPassword("");
    };

    // La función loginUser envía las credenciales del usuario al servidor Node.js y muestra una respuesta  
    // en frontend. Luego, se redirige al usuario autenticado al componente del Foro, en donde alamcena su id en 
    // almacenamiento local para una fácil identificacion
    const loginUser = () => {
        fetch("http://localhost:4000/api/login", {
            method: "POST",
            body: JSON.stringify({
                email,
                password,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                if(data.error_message) {
                    alert(data.error_message);
                } else {
                    alert(data.message);
                    navigate("/dashboard");
                    localStorage.setItem("_id", data.id);
                }
            })
            .catch((err) => console.error(err));
    }

    return (
        <main className='login'>
            <h1 className="loginTitle">Iniciar Sesión</h1>
            <form className="loginForm" onSubmit={handleSubmit}>
                <label htmlFor="email">Correo electrónico</label>
                <input
                    type="text"
                    name="email"
                    id="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="password">Contraseña</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className="loginBtn">Iniciar Sesión</button>
                <p>
                    ¿No tienes una cuenta? <Link to='/register'>Registrarme</Link>
                </p>
            </form>
        </main>
    )
}

export default Login
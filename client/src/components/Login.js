import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ email, password });
        setEmail("");
        setPassword("");
    };

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
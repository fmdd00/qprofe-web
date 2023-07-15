import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ username, email, password });
        signUp();
        setEmail("");
        setUsername("");
        setPassword("");
    };

    const signUp = () => {
        fetch("http://localhost:4000/api/register", {
            method: "POST",
            body: JSON.stringify({
                email,
                password,
                username,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.error_message) {
                    alert(data.error_message);
                } else {
                    alert("Cuenta creada exitosamente");
                    navigate("/")
                }
            })
            .catch((err) => console.error(err));
    };

    return (
        <main className='register'>
            <h1 className='registerTitle'>Crear una cuenta</h1>
            <form className='registerForm' onSubmit={handleSubmit}>
                <label htmlFor="username">Usuario</label>
                <input
                    type="text"
                    name="username"
                    id="username"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
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
                    type="text"
                    name="password"
                    id="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className='registerBtn'>Registrar</button>
                <p>
                    ¿Ya tienes una cuenta? <Link to='/'>Iniciar Sesión</Link>
                </p>
            </form>
        </main>
    );
};

export default Register
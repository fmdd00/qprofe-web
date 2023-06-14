import React from 'react'
import { Link } from 'react-router-dom'
import { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from '../context/AuthProvider';

import axios from '../api/axios';


function Login() {
    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    //Este primer useEffect es para que cada vez que el componente es cargado, se enfoque en el input del usuario
    useEffect(() => {
        userRef.current.focus();
    }, [])

    //Este segundo eseEffect es para limpiar los errores de mensaje cuando se cambien o modifiquen el usuario y/o contraseña
    useEffect(() => {
        setErrMsg('')
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user, pwd);
        setUser('');
        setPwd('');
        setSuccess(true);
    }

    return (
        <>
            {success ? (
                <div className='container'>
                    <div className='mt-4 border border-2 p-4 rounded col-6 mx-auto'>
                        <div className='mt-2'>
                            <h1 className='text-center'>¡Estás Logueado!</h1>
                        </div>
                        <div className='mt-3 d-grid gap-2 col-4 mx-auto'>
                            <Link to="/foro" className="btn btn-primary">Ir al foro</Link>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="container">
                    <p ref={errRef} className={errMsg ? "errMsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <div className="mt-4 border border-2 p-4 rounded col-6 mx-auto">
                        <div className="mt-2">
                            <h1 className="text-center">INICIAR SESIÓN</h1>
                        </div>
                        <div className="mt-4">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="username">Correo electrónico</label>
                                    <input
                                        type="email"
                                        id="username"
                                        ref={userRef}
                                        autoComplete="off"
                                        onChange={(e) => setUser(e.target.value)}
                                        value={user}
                                        required
                                        className="form-control" placeholder="Ingresar email"
                                    />
                                    <div className="form-text">Nunca compartiremos tu correo con terceros.</div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Contraseña</label>
                                    <input type="password"
                                        id="password"
                                        onChange={(e) => setPwd(e.target.value)}
                                        value={pwd}
                                        required
                                        className="form-control" placeholder="Ingresar contraseña" />
                                </div>
                                <div className="d-grid gap-2 col-4 mx-auto">
                                    <button>Ingresar</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Login
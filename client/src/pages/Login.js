import React from 'react'
import { useState } from 'react';
import Validation from './LoginValidation';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


function Login() {
    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const [errors, setErrors] = useState({})

    const navigate = useNavigate();

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));
        if (errors.email === "" && errors.password === "") {
            axios.post('http://localhost:8081/login', values)
                .then(res => {
                    if (res.data === "Success") {
                        navigate('/foro')
                    } else {
                        alert("Los datos ingresados no existen.")
                    }
                })
                .catch(err => console.log(err));
        }
    }

    return (
        <div className="container">
            <div className="mt-4 border border-2 p-4 rounded col-6 mx-auto">
                <div className="mt-2">
                    <h1 className="text-center">INICIAR SESIÓN</h1>
                </div>
                <div className="mt-4">
                    <form action='' onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Correo electrónico:</label>
                            <input
                                onChange={handleInput}
                                type="email"
                                name="email"
                                className="form-control"
                                placeholder="Ingresar email"
                            />
                            {errors.email && <span className='text-danger'>{errors.email}</span>}
                            <div className="form-text">Nunca compartiremos tu correo con terceros.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Contraseña:</label>
                            <input
                                onChange={handleInput}
                                type="password"
                                name="password"
                                className="form-control"
                                placeholder="Ingresar contraseña" />
                            {errors.password && <span className='text-danger'>{errors.password}</span>}
                        </div>
                        <div className="d-grid gap-2">
                            <button type='submit' className='btn btn-primary'>Ingresar</button>
                            <Link to="/registro" className="btn btn-outline-secondary">Resgístrate</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
import { Link, useNavigate } from 'react-router-dom';
import Validation from './RegistroValidation';
import { useState } from 'react';
import axios from 'axios'

function Registro() {

    const [values, setValues] = useState({
        name: '',
        email: '',
        password: ''
    })

    const navigate = useNavigate();

    const [errors, setErrors] = useState({})

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));
        if (errors.name === "" && errors.email === "" && errors.password === "") {
            axios.post('http://localhost:8081/registro', values)
                .then(res => {
                    navigate('/confRegistro')
                })
                .catch(err => console.log(err));
        }
    }

    return (
        <div className="container">
            <div className="mt-4 border border-2 p-4 rounded col-6 mx-auto">
                <div className="mt-2">
                    <h1 className="text-center">REGISTRO</h1>
                </div>
                <div className="mt-4">
                    <form action='' onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Nombres y apellidos:</label>
                            <input
                                onChange={handleInput}
                                type="text"
                                name="name"
                                className="form-control"
                                placeholder="Nombre completo"
                            />
                            {errors.name && <span className='text-danger'>{errors.name}</span>}
                        </div>
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
                                name="password"
                                type="password"
                                className="form-control"
                                placeholder="Ingresar contraseña"
                            />
                            {errors.password && <span className='text-danger'>{errors.password}</span>}
                            <div className="form-text">Al menos un una letra minuscula, una mayuscula, un número y un carácter especial.</div>
                        </div>
                        <div className="d-grid gap-2">
                            <button type='submit' className="btn btn-primary" >Crear cuenta</button>
                            <Link to="login" className="btn btn-outline-secondary">Iniciar Sesión</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Registro;

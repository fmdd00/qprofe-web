import React from 'react'
import { Link } from 'react-router-dom'

function ConfRegistro() {
    return (
        <div className='container'>
            <div className='mt-4 border border-2 p-4 rounded col-6 mx-auto'>
                <h1 className='text-center mb-4'>¡Registro Exitoso!</h1>
                <p>Hola USUARIO. Tu cuenta se ha creado con éxito. Bienvenido a esta comunidad creada por estudiantes para estudiantes.</p>
                <div className='d-grid gap-2 col-6 mx-auto'>
                    <Link to="/foro" className='btn btn-success'>Dirígeme al foro</Link>
                </div>
            </div>
        </div>
    )
}

export default ConfRegistro
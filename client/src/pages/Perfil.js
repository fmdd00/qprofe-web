import React from 'react'
import user from '../images/user.jpg'

function Perfil() {
  return (
    <div className='container'>
        <div className='mt-4 border border-2 p-4 rounded col-6 mx-auto'>
          <div className='mt-2'>
            <h1 className='text-center'>Mi Perfil</h1>
          </div>
          <img
              className="img-thumbnail img responsive"
              src={user}
              alt="imagenUser"
            ></img>
          <div className='mt-4'>
            <label className='form-label'>Nombre:</label>
            <p>Francisco Diaz</p>
          </div>
          <div className='mt-4'>
            <label className='form-label'>Correo:</label>
            <p>20180593@aloe.ulima.edu.pe</p>
          </div>
          <div className='mt-4'>
            <label className='form-label'>Contraseña:</label>
            <p>**************</p>
          </div>
          <button className='btn btn-success'>Actualizar datos</button>
        </div>
    </div>
  )
}

export default Perfil
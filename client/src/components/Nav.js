import React from 'react'
import { useNavigate } from 'react-router-dom';

// Muestra la barra de navegación, con el título de la aplicación, notificaciones, botón de perfil y de cerrar sesión
const Nav = () => {
  const navigate = useNavigate();

  const signOut = () => {
    // Se elimina el id del almacenamiento local cuando el usuario cierra sesión
    localStorage.removeItem("_id");
    alert("Se ha cerrado sesión.");
    navigate("/");
  };

  const verPerfil = () => {
    navigate("")
  }

  return (
    <nav className='navbar'>
      <h2>QPROFE</h2>
      <div>
        <button onClick={verPerfil}>Mi Perfil</button>
        <button onClick={signOut}>Cerrar Sesión</button>
      </div>
    </nav>
  )
}

export default Nav
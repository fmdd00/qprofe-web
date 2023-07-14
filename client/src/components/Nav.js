import React from 'react'

const Nav = () => {
    const signOut = () => {
        alert("Se ha cerrado sesión.");
    };
  return (
    <nav className='navbar'>
        <h2>QPROFE FORO</h2>
        <div>
            <button onClick={signOut}>Cerrar Sesión</button>
        </div>
    </nav>
  )
}

export default Nav
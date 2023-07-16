import React from 'react'
import { useNavigate } from 'react-router-dom';
import {
  NovuProvider,
  PopoverNotificationCenter,
  NotificationBell,
} from "@novu/notification-center";

// Muestra la barra de navegación, con el título de la aplicación, notificaciones, botón de perfil y de cerrar sesión
const Nav = () => {
  const navigate = useNavigate();

  const onNotificationClick = (notification) =>
    navigate(notification.cta.data.url);

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
        {/* Lo de abajo agrega una campana de notificaciones al Nav component empleando Novu */}
        <NovuProvider
          subscriberId='64b38555cd979b2524511ec3'
          applicationIdentifier='vzjsGMsSPeDR'
        >
          <PopoverNotificationCenter
            onNotificationClick={onNotificationClick}
            colorScheme='light'
          >
            {({ unseenCount }) => (
              <NotificationBell unseenCount={unseenCount} />
            )}
          </PopoverNotificationCenter>
        </NovuProvider>

        <button onClick={verPerfil}>Mi Perfil</button>
        <button onClick={signOut}>Cerrar Sesión</button>
      </div>
    </nav>
  )
}

export default Nav
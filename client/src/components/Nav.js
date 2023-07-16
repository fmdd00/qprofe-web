import React from "react";
import {
	NovuProvider,
	PopoverNotificationCenter,
	NotificationBell,
} from "@novu/notification-center";
import { useNavigate } from "react-router-dom";

const Nav = () => {
	const navigate = useNavigate();

	const onNotificationClick = (notification) =>
		navigate(notification.cta.data.url);

	const signOut = () => {
		localStorage.removeItem("_id");
		navigate("/");
	};
	return (
		<nav className='navbar'>
			<h2>QPROFE</h2>

			<div className='navbarRight'>
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
				<button onClick={signOut}>Cerrar Sesión</button>
			</div>
		</nav>
	);
};

export default Nav;
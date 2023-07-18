import React from "react";
import {
	NovuProvider,
	PopoverNotificationCenter,
	NotificationBell,
} from "@novu/notification-center";
import { useNavigate } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

const Navb = () => {
	const navigate = useNavigate();

	const onNotificationClick = (notification) =>
		navigate(notification.cta.data.url);

	const signOut = () => {
		localStorage.removeItem("_id");
		navigate("/");
	};
	return (
		<div>
			<Navbar className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
				<Container>
					<Navbar.Brand href="/dashboard" className='fs-2 fw-bold'><FontAwesomeIcon icon={faPaperPlane} /> Q'PROFE</Navbar.Brand>
					<Navbar.Toggle />
					<Navbar.Collapse className="justify-content-end">
						<Nav>
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
							<Nav.Link href="/perfil">Mi Perfil</Nav.Link>
							<button className='btn btn-outline-danger' onClick={signOut}>Cerrar Sesión</button>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
};

export default Navb;
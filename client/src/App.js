import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import Replies from "./components/Replies";
import ConfRegistro from "./components/ConfRegistro";
import Bienvenida from "./components/Bienvenida";

const App = () => {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Bienvenida />} />
					<Route path='/login' element={<Login />} />
					<Route path='/register' element={<Register />} />
					<Route path='/dashboard' element={<Home />} />
					<Route path='/:id/replies' element={<Replies />} />
					<Route path='/confirmacion' element={<ConfRegistro />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
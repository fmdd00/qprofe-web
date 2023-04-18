import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home'
import Registro from '../pages/Registro';
import Login from '../pages/Login'
import ConfRegistro from '../pages/ConfRegistro';
import Foro from '../pages/Foro';

function Rutas() {
  return (
    <section>
        <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/registro" element={ <Registro /> } />
            <Route path="/login" element={ <Login /> } />
            <Route path="/confRegistro" element={ <ConfRegistro /> } />
            <Route path="/foro" element={ <Foro /> } />
        </Routes>
    </section>
  )
}

export default Rutas;
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home'
import Registro from '../pages/Registro';
import Login from '../pages/Login'

function Rutas() {
  return (
    <section>
        <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/registro" element={ <Registro /> } />
            <Route path="/login" element={ <Login /> } />
        </Routes>
    </section>
  )
}

export default Rutas;
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home'
import Registro from './pages/Registro';
import Login from './pages/Login'
import ConfRegistro from './pages/ConfRegistro';
import Foro from './pages/Foro';
import Perfil from './pages/Perfil';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/registro" element={<Registro />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/confRegistro" element={<ConfRegistro />}></Route>
        <Route path="/foro" element={<Foro />}></Route>
        <Route path="/perfil" element={<Perfil />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

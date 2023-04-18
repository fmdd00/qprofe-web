import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <div>
                        <Link to="/" className='navbar-brand' >QPROFE</Link>
                    </div>
                    <div>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/registro" className='nav-link btn btn-outline-primary'>Registro</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/login" className='nav-link btn btn-primary' style={{ color:'white' }}>Iniciar Sesión</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
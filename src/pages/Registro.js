import { Link } from 'react-router-dom';

function Registro() {
    return (
        <div className="container">
            <div className="mt-4 border border-2 p-4 rounded col-6 mx-auto">
                <div className="mt-2">
                    <h1 className="text-center">REGISTRO</h1>
                </div>
                <div className="mt-4">
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Nombres y apellidos</label>
                            <input className="form-control" type="text" placeholder="Nombre completo" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Código de alumno</label>
                            <input className="form-control" type="text" placeholder="Código Ulima" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Correo electrónico</label>
                            <input type="email" className="form-control" placeholder="Ingresar email" />
                            <div className="form-text">Nunca compartiremos tu correo con terceros.</div>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Contraseña</label>
                            <input type="password" className="form-control" placeholder="Ingresar contraseña" />
                        </div>
                        <div className="mb-4">
                            <label for="exampleInputPassword1" className="form-label">Confirmar contraseña</label>
                            <input type="password" className="form-control" placeholder="Repite la contraseña" />
                        </div>
                        <div className="d-grid gap-2 col-4 mx-auto">
                            <Link to="/confRegistro" className="btn btn-primary" >Crear cuenta</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Registro;

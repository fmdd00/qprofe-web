import React from 'react'
import { Link } from 'react-router-dom';
import profe from '../images/profe.jpg'

function Home() {
  return (
    <div className="home_page">
      <div className="container">
        <div className="row mt-4">
          <div className="col-6">
            <div>
              <h1 className="fw-bold fs-1" style={{ color: "#3C99DC"}}>
                CONSULTA LAS VALORACIONES DE LOS PROFESORES HECHAS POR LOS MISMOS ESTUDIANTES
              </h1>
            </div>
            <div className="mt-4">
              <p className="fs-5" style={{ textAlign: "justify" }}>
                Bienvenido a Q'PROFE, una herramienta creada por estudiantes, para estudiantes.
              </p>
            </div>
            <div className="mt-4">
              <div className="row">
                <div className="col-6 d-grid">
                  <button className="btn btn-primary btn-lg">
                    <Link
                      to="/login"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Iniciar Sesión
                    </Link>
                  </button>
                </div>
                <div className="col-6 d-grid">
                  <button className="btn btn-outline-secondary btn-lg">
                    <Link
                      to="/registro"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      
                      Regístrate
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 mb-4">
            <img
              className="img-fluid rounded float-end mb-2"
              src={profe}
              alt="imagenSL"
            ></img>
            <div
              className="fst-italic form-text"
              style={{ textAlign: "right" }}
            >
              Pantallazo de prueba Si puedes ver esto, significa que todo
              funciona bien :) Luego le pongo una interfaz más chvr.
            </div>
            {/*
              <button className="btn btn-primary">
                <Link
                  to="/exito"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <FontAwesomeIcon icon="fa-solid fa-clipboard" /> exito prueba
                </Link>
              </button>
            */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

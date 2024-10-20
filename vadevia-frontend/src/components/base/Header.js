import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg fixed-top bg-body-tertiary">
        <div className="container px-0 py-3">
          <Link to="/" className="navbar-brand">
            VADEVIA
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item px-3 fsMenu">
                <Link to="/experience/customs" className="nav-link active" aria-current="page">
                  Arma tu experiencia
                </Link>
              </li>
              <li className="nav-item px-3 fsMenu">
                <Link to="/experience/shareds" className="nav-link active" aria-current="page">
                  Experiencias
                </Link>
              </li>
              <li className="nav-item px-3 fsMenu">
                <Link to="/packages" className="nav-link active" aria-current="page">
                  Paquetes
                </Link>
              </li>
              <li className="nav-item px-3 fsMenu">
                <Link to="/guides" className="nav-link active" aria-current="page">
                  Guias
                </Link>
              </li>
              <li className="nav-item px-3 fsMenu d-none">
                <a className="nav-link active" aria-current="page" href="#">
                  Conviertete en host
                </a>
              </li>
              <li className="nav-item px-3 fsMenu">
                <a className="nav-link active" aria-current="page" href="#">
                  Registrate
                </a>
              </li>
              <li className="nav-item px-3 fsMenu">
                <a className="nav-link active" aria-current="page" href="#">
                  Iniciar Sesión
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

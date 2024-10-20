import React from "react";

const Footer = () => {
  return (
    <footer className="bg-secondary">
      <div className="container pt-3">
        <div className="row d-flex align-items-center">
          <div className="col-md-6">
            <img
              src="https://dummyimage.com/600x700/000/fff&text=Logo+vadevia"
              className="img-fluid w-50"
              alt="imagen de prueba"
            />
          </div>
          <div className="col-md-6">
            <div className="row justify-content-end">
              <div className="col-md-3">
                <p>Blog</p>
                <p>Nosotros</p>
              </div>
              <div className="col-md-3">
                <p>Experiencias</p>
                <p>Paquetes</p>
                <p>Guias</p>
              </div>
              <div className="col-md-3">
                <p>Facebook</p>
                <p>Instagram</p>
                <p>TikTok</p>
                <p>Linkedin</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid pt-3 px-5">
        <div className="row">
          <div className="col-md-4">
            <p>© Vadevia 2024</p>
          </div>
          <div className="col-md-8 text-center">
            <p>Aviso de Privacidad</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

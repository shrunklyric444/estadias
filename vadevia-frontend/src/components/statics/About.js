
const About = () => {
    return (
        <div className="container my-5 py-5 px-5">
            <div className="row my-5 py-5 mt-5 d-flex align-items-center">
                <div className="col-md-5">
                    <h1> 👋 Acerca de nosotros. </h1>
                    Vadevia es un mercado para proveedores de servicios turísticos que brindan servicios como guías de 
                    turistas, renta de transporte marítimo, tours locales, paquetes de viajes nacionales e internacionales. 
                    Nuestro servicio facilita la búsqueda, reservación y compra de dichos servicios, permitiendo a los
                    usuarios y proveedores evaluar cada una de las experiencias.
                </div>
                <div className="col-md-7">
                    <img src="https://vadevia.s3.us-west-2.amazonaws.com/public/static/img/about-right.webp" alt="" className="img-fluid" />
                </div>
            </div>
        </div>
    );
}

export default About

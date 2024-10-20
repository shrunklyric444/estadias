 
import Banner from "./BannerHome";
import CarouselHomeExp from "./experiences/CarouselHomeExp"
import CarouselHomePack from "./experiences/CarouselHomePack"

const Home = () => {
    return (
        <section id="header">
            <div className="container-fluid bgHeader"></div>
            <div className="container py-5">
                <div className="row py-5">
                    <div className="col-md-12 py-5">
                        <h2 className="py-5 text-center">
                            "Descubre el mundo con nosotros: tu próxima aventura comienza aquí."
                        </h2>
                    </div>
                </div>
            </div>
            <CarouselHomeExp />
            <CarouselHomePack />
            <Banner />
        </section>
    );
}

export default Home

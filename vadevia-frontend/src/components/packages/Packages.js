import ListComponents from "../experiences/ListComponents";
import BannerUser from "../BannerUser";

const Packages = () => {
    return (
        <>
            <div className="container mt-5 py-5">
                <h1 className="pt-5">Paquetes</h1>
                <div className="container">
                    <ListComponents />
                </div>
            </div>
            <BannerUser />
        </>
    );
}

export default Packages

import ListComponents from "./ListComponents";
import BannerUser from "../BannerUser";

const Shareds = () => {
    return (
        <> 
            <div className="container mt-5 py-5">
                <h1 className="pt-5">Experiencias</h1>
                <div className="container">
                    <ListComponents />
                </div>
            </div>    
            <BannerUser />
        </> 
    );
}

export default Shareds

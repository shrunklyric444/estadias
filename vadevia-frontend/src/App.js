import { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

/* styles */ 
import "./main.sass";

/* componentes base */
import Header from "./components/base/Header";
import Footer from "./components/base/Footer";

/* secciones del sitio */
import Home from "./components/Home"
import Customs from "./components/experiences/Customs";
import Shareds from "./components/experiences/Shareds";
import Packages from "./components/packages/Packages";
import Guides from "./components/guides/Guides";
import DetailGuide from "./components/guides/DetailGuide";
import DetailPackage from "./components/packages/DetailPackage";
import DetailShared from "./components/experiences/shared/DetailShared";

/* secciones de inicio de sesión y usuario   */
import Login from "./components/login/Login";
import SignUp from "./components/login/SignUp";
import UpdateProfile from "./components/user/UpdateProfile";
import MyExperiences from "./components/user/MyExperiences";
import Reservations from "./components/user/Reservations";
import Favorites from "./components/user/Favorites";

/* paginas estaticas */
import About from "./components/statics/About";
import Privacy from "./components/statics/Privacy";
import Conditions from "./components/statics/Conditions";

const App = () => {
  return (
    <Fragment>
      <Header />
      <Routes> 

        <Route path="/" element={ <Home /> } />
        <Route path='/experience/customs' element={ <Customs /> }/>
        <Route path='/experience/shareds' element={ <Shareds /> }/>
        <Route path='/packages' element={ <Packages /> }/>
        <Route path='/guides' element={ <Guides /> }/>
        <Route path='/guides/detail' element={ <DetailGuide /> }/>
        <Route path='/packages/detail' element={ <DetailPackage /> }/>
        <Route path='/experience/shareds/detail' element={ <DetailShared /> }/>

        <Route path='/login' element={ <Login /> }/>
        <Route path='/signup' element={ <SignUp /> }/>
        <Route path='/user/update-profile' element={ <UpdateProfile /> }/>
        <Route path='/user/my-experiences' element={ <MyExperiences /> }/>
        <Route path='/user/reservations' element={ <Reservations /> }/>
        <Route path='/user/lists/favs' element={ <Favorites /> }/>

        <Route path='/about' element={ <About /> }/>
        <Route path='/privacy-politics' element={ <Privacy /> }/>
        <Route path='/conditions-and-terms' element={ <Conditions /> }/>

      </Routes>
      <Footer />
    </Fragment>
  );
};

export default App;

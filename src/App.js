import './App.css';
import Header from "./componentes/Header/Header";
import Footer from "./componentes/Footer/Footer";
import Corpo1 from "./componentes/Corpo/Corpo1";
import ImgPrincipal from "./componentes/Corpo/imgPrincipal";
import Corpo2 from "./componentes/Corpo/Corpo2";
import Corpo3 from "./componentes/Corpo/Corpo3";
import Corpo4 from "./componentes/Corpo/Corpo4";
import Login from "./componentes/Login";
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  return (
    <div className="App">
        <Header/>
        <ImgPrincipal/>
        <Corpo1/>
        <Corpo2/>
        <Corpo3/>
        <Corpo4/>
        <Login/>
        <Footer/>
    </div>
  );
}
export default App;

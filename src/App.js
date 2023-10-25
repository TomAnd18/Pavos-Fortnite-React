import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Home from './components/pages/Home';
import Details from "./components/pages/Details";
import NavBar from './components/layout/NavBar';
import Help from "./components/pages/Help";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/' element={ <Home/> }/>
          <Route path='/detalles/:id' element={ <Details/> }/>
          <Route path='/ayuda' element={ <Help/> }/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;

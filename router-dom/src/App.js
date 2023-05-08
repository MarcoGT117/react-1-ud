import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Contacto from './pages/contacto';
import QuienesSomos from "./pages/quienesSomos";

function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <Router>
        <div>
          <Link to="/contacto">
            <button>Contacto</button>
          </Link>

          <Link to="/quienes-somos">
            <button>Quienes somos</button>
          </Link>
        </div>

        <Routes>
          <Route path='/contacto' element={<Contacto/>} />
          <Route path='/quienes-somos' element={<QuienesSomos/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

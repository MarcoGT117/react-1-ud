import logo from './logo.svg';
import './App.css';
// Importando el primer componente
// import HolaMundo, {AdiosMundo} from './components/HolaMundo';
import Saludar from './components/Saludar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <Saludar name="Marco Gonzalez" age="26" />
      <Saludar name="Juan Perez" age="30" />
      </header>
    </div>
  );
}

export default App;

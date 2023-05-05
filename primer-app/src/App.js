import logo from './logo.svg';
import './App.css';
// Importando el primer componente
// import HolaMundo, {AdiosMundo} from './components/HolaMundo';
import Saludar from './components/Saludar';

function App() {
  const user = {
    name : "Juan Perez",
    age : 30,
    favColor : "Azul"
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <Saludar userInfo={user} />
      </header>
    </div>
  );
}

export default App;

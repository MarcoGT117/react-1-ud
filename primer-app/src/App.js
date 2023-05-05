import logo from './logo.svg';
import './App.css';
// Importando el primer componente
import HolaMundo, {AdiosMundo} from './components/HolaMundo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Renderizando el componente HolaMundo
        </p>
        <HolaMundo/>
        <AdiosMundo/>
      </header>
    </div>
  );
}

export default App;

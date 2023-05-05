import { useState } from 'react';
import logo from "./logo.svg";
import "./App.css";

function App() {
  // Primer parametro: constante con el valor, el segundo: funcion que se ocupa de actualizar el estado, despues en useState va el valor por default
  const [stateCar, setStateCar] = useState(false);
  const encenderApagar = ()=>{
    // if(stateCar) setStateCar(false);
    // if(!stateCar) setStateCar(true);

    // Mejor logica
    setStateCar(!stateCar);

    // Para que otros componenetes puedan acceder al valor actual se stateCar
    // setStateCar(previousValue => !previousValue)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>El Coche esta: {stateCar ? "Encendido" : "Apagado"}</h2>
        <button onClick={encenderApagar}>Encender / Apagar</button>
      </header>
    </div>
  );
}

export default App;

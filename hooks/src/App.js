import { useState, useEffect } from 'react';
import logo from "./logo.svg";
import "./App.css";

function App() {
  // Primer parametro: constante con el valor, el segundo: funcion que se ocupa de actualizar el estado, despues en useState va el valor por default
  const [stateCar, setStateCar] = useState(false);

  // Para useEffect
  const [ count, setCount] = useState(0)

  useEffect(()=> {
    // Esto es lo que el useEffect ejecutara
    console.log(count);
  }, [
    // En el array estan las variables que queremos que detecte actulizar
    count
  ])

  const encenderApagar = ()=>{
    // if(stateCar) setStateCar(false);
    // if(!stateCar) setStateCar(true);

    // Mejor logica
    setStateCar(!stateCar);
    setCount(count + 1); 

    // Para que otros componenetes puedan acceder al valor actual se stateCar
    // setStateCar(previousValue => !previousValue)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>El Coche esta: {stateCar ? "Encendido" : "Apagado"}</h2>
        <button onClick={encenderApagar}>Encender / Apagar</button>

        <h2>Cantidad de clicks dados: {count}</h2>
      </header>
    </div>
  );
}

export default App;

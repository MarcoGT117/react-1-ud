// Este es el primer componente creado para la aplicacion.
// Una buena practica para su creacion es crear una carpeta llamada components donde se guardaran y nombrarlos a todos con la primer letra en mayuscula

// Se empieza con un import de react
import React from "react";

// Lo siguiente es la funcion que renderiza el componente, por lo general esta funcion tiene el mismo nombre del componente

function HolaMundo() {
    let name = "Marco Gonzalez"

  return (
    <div>
      <h1>Hola mundo!</h1>
      <h2>{name}</h2>
    </div>
  );
}

// Por ultimo exportamos el componente para que pueda interactuar con el resto de la aplicacion
export default HolaMundo;

// Como no se pueden tener dos exports en el mismo archivo a este subcomponente le pondremos el export de manera directa, sin el default
export function AdiosMundo() {
  return (
    <div>
      <h3>Adios</h3>
    </div>
  );
}

import { React } from "react";

function Saludar(props) {
    // Destructuracion
    const { userInfo, saludarUser }= props;
    // Añadido valores por default
    const { name = "anonimo", age ="", favColor="color" } = userInfo;

    console.log(userInfo);

    // Render
    return(
        <div>
            <p>Hola {userInfo.name}, tiene {age} años, su color favorito es el {favColor}</p>
            <button onClick={()=>saludarUser(name, age)}>Saludar</button>
        </div>
    )
}

export default Saludar;
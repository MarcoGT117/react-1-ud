import { React } from "react";

export default function Saludar(props) {
    // Destructuracion
    const { userInfo, saludarUser }= props;
    const { name, age, favColor } = userInfo;

    console.log(userInfo);

    return(
        <div>
            <p>Hola {userInfo.name}, tiene {age} años, su color favorito es el {favColor}</p>
            <button onClick={()=>saludarUser(name)}>Saludar</button>
        </div>
    )
}
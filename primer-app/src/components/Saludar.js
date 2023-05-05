import { React } from "react";

export default function Saludar(props) {
    console.log(props);
    return(
        <div>
            <p>Hola {props.userInfo.name}, tiene {props.userInfo.age} años, su color favorito es el {props.userInfo.favColor}</p>
        </div>
    )
}
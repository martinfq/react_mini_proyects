import { useState } from "react";
import Square from "./square";

export default function Board() {

    const [valor, setValor] = useState([]);
  
    function handleClick(){
        const temp = [...valor];
        asignarValor(temp);
        console.log(valor);
        setValor(temp);
    }
    function asignarValor(array){
        if(array[array.length - 1] === 1){
            array.push(0);
        }else{
            array.push(1);
        }
    }
    
    return (
    <>
      <div>
        <Square valor={valor[0]} handleClick={handleClick}/>
        <Square valor={valor[1]} handleClick={handleClick}/>
        <Square valor={valor[2]} handleClick={handleClick}/>
      </div>
    </>
  );
}

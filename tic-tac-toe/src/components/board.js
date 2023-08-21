import { useState } from "react";
import Square from "./square";
const J1 = [];
  const J2 = [];
  
export default function Board() {
  const [valor, setValor] = useState(Array(9).fill(null));
  

  function handleClick(e) {
    const numev = parseInt(e.target.id);

    const temp = [
      ...valor.slice(0, e.target.id),
      asignarValor(valor[e.target.id]),
      ...valor.slice(numev + 1),
    ];
    setValor(temp);
    if (asignarValor(valor[numev]) === 1) {
      J1.push(numev);
    } else {
      J2.push(numev);
    }
    console.log(J1);
    console.log(J2);
  }
  function siguienteTurno(num) {
    if (num === 1) {
      return 0;
    } else {
      return 1;
    }
  }
  function asignarValor(num) {
    if (!num) {
      return 1;
    } else {
      return 0;
    }
  }
  function calcularGanador() {}

  return (
    <>
      <div>
        <Square id={0} valor={valor[0]} handleClick={handleClick} />
        <Square id={1} valor={valor[1]} handleClick={handleClick} />
        <Square id={2} valor={valor[2]} handleClick={handleClick} />
      </div>
    </>
  );
}

import { useState } from "react";
import Square from "./square";
import "../styles/styles.css"
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
    e.target.disabled= true;
    if (asignarValor(valor[numev]) === 1) {
      J1.push(numev);
    } else {
      J2.push(numev);
    }
    calcularGanador();
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
    } 
  }
  function calcularGanador() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (J1.includes(a) && J1.includes(b) && J1.includes(c)) {
        console.log("Gano J1");
      }
    }
  }

  return (
    <>
      <div className="board-row">
        <Square id={0} valor={valor[0]} handleClick={handleClick} />
        <Square id={1} valor={valor[1]} handleClick={handleClick} />
        <Square id={2} valor={valor[2]} handleClick={handleClick} />
      </div>
      <div className="board-row">
        <Square id={3} valor={valor[3]} handleClick={handleClick} />
        <Square id={4} valor={valor[4]} handleClick={handleClick} />
        <Square id={5} valor={valor[5]} handleClick={handleClick} />
      </div>
    </>
  );
}

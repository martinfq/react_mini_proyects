
import './App.css';
import fcc from './imagenes/fcc.png';
import Boton from './componentes/Boton.js';
import Pantalla from './componentes/Pantalla';
import BotonClear from './componentes/BotonClear';
import { useState } from 'react';

import { evaluate } from 'mathjs';

var valAnterior = 0;

function App() {

  const [input, setInput] = useState('');

 

  const agregarInput = val => {
    
    if(isNaN(val) && isNaN(valAnterior)){
      alert("Ingrese un numero")
    }else{
      setInput(input + val);
      
    }
    valAnterior = val;
  };

  const calcularResultado = () => {
    if(input){
      setInput(evaluate(input));
    }else {
      alert("asdasd")
    }
    
  };


  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img 
          src={fcc}
          className='logo'
          alt='Logo de FCC' />
      </div>
      <div className='contenedor-calculadora'>
        <Pantalla input={input}/>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>1</Boton>
          <Boton manejarClick={agregarInput}>2</Boton>
          <Boton manejarClick={agregarInput}>3</Boton>
          <Boton manejarClick={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>4</Boton>
          <Boton manejarClick={agregarInput}>5</Boton>
          <Boton manejarClick={agregarInput}>6</Boton>
          <Boton manejarClick={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>7</Boton>
          <Boton manejarClick={agregarInput}>8</Boton>
          <Boton manejarClick={agregarInput}>9</Boton>
          <Boton manejarClick={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={calcularResultado}>=</Boton>
          <Boton manejarClick={agregarInput}>0</Boton>
          <Boton manejarClick={agregarInput}>.</Boton>
          <Boton manejarClick={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={() => setInput('')}>
            Clear
          </BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;


import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import fccLogo from './imagenes/fcc.png';

import { useState } from 'react';

function App() {

  const [numClicks, setNumClicks] = useState(0);

  const manejarClic = () => {
    setNumClicks(numClicks + 1);
  }
  const reiniciarContador = () => {
    setNumClicks(0);
  }
  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img
          className='logo'
          src={fccLogo}
          alt='logo'/>
      </div>
      <div className='contendor-principal'>
        <Contador numClicks={numClicks} />
        <Boton
          texto='Click'
          esBotonDeClic={true}
          manejarClic={manejarClic}/>
        <Boton
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={reiniciarContador}/>  
      </div>
    </div>
  );
}

export default App;

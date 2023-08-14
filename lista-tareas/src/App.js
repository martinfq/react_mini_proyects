import './App.css';
import fcc from './imagenes/fcc.png';

import ListaDeTareas from './componentes/ListaDeTareas';

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className='fcc-logo-contenedor'>
        <img 
          src={fcc} 
          className='fcc-logo' />
      </div>
      <div className='tareas-lista-principal'>
        <h1>
          Mis tareas
        </h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;

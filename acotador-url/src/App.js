import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Create from './pages/create';
import Redirect from './pages/redirect';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Create/>}/>
        <Route path="/" element={<Redirect/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

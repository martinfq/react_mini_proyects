import {openModal,openModal2} from "./components/openModal";
import "./App.css";

function App() {
  function handleOpenModal() {
    openModal();
  }
  function handleOpenModal2() {
    openModal2();
  }

  return (
    <div className="App">
      <button onClick={handleOpenModal}>Abrir Modal</button>
      <button onClick={handleOpenModal2}>Abrir Modal</button>
    </div>
  );
}

export default App;

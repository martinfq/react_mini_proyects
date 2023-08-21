import "../styles/styles.css"
export default function Square({id, valor, handleClick}){
    return  <button id={id} className="square" onClick={handleClick}>{valor}</button>
}
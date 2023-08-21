export default function Square({id, valor, handleClick}){
    return  <button id={id} onClick={handleClick}>{valor}</button>
}
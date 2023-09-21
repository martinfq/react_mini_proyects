import Input from "../../input";

export default function TextBlock({item, onChange , onKeyDown}){

    function handleOnChange(e){
        onChange(item, e);
    }
    function handleOnKeyDown(e){
        onKeyDown(item, e);
    }
    return <Input value={item.text} onKeyDown={handleOnKeyDown} onChange={handleOnChange}></Input>
}
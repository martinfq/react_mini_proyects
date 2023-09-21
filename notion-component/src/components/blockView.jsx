import { useRef, useState } from "react";
import TextBlockView from "./blockComponents/textBlock/textBlockView";

export default function BlockView(){

    const ref = useRef(null);

    const [currentItem, setCurrentItem] = useState(null);
    const [type, setType] = useState("text");
    const [properties, setProperties] = useState(['id', "text", "completed"]);

    const [data, setData] = useState([
        {
            id: crypto.randomUUID(),
            text: "Hola a todos",
            completed: false,
        },
    ]);

    function handleChange(item){
        const {type, text, id} = item;
        if(type === "text"){
            const temp = [...data];
            const editItem = temp.find(i => i.id === id);
            if(editItem){
                editItem.text = text;
                setData(temp)
            }
        }
    }
    function handleOnCreate(){
        const newItem = {
            id:crypto.randomUUID(),
            text: "Hola",
            completed: false 
        }

        properties.forEach(prop => {
            if(!newItem.hasOwnProperty(prop)){
                newItem[prop] = "";
            }
        })
    }
    return <div>
        <TextBlockView ref={ref} data={data} onChange={handleChange} onCreate={handleOnCreate}/>
    </div>
}
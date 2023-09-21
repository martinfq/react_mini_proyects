import { forwardRef } from "react";
import TextBlock from "./textBlock";

function TextBlockView({ data, onChange, onCreate }, ref) {
  function handleOnChange(item, e) {
    onChange({
      type: "text",
      id: item.id,
      text: e.target.value,
      completed: item.completed,
    });
  }
  function handleOnKeyDown(item, e){
    if(e.key === 'Enter'){
        onCreate();
    }
  }
  return data.map((item) => (
    <TextBlock key={item.id} item={item} onChange={handleOnChange} onKeyDown={handleOnKeyDown}/>
  ));
}
export default forwardRef(TextBlockView);

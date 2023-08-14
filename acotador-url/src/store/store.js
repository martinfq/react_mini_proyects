import { useReducer } from "react";
import { add, addView, load } from "./actions";

export function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      return add(state, action);
    case "LOAD":
      return load(state, action);
    case "LOAD_VIEW":
      return addView(state, action);
    default:
  }
}

export default function useReduceApp() {
  return useReducer(reducer, { items: [] });
}

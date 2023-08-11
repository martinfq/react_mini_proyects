import { useState } from "react";
import Results from "./results";

export default function SearchBar({ items, onItemSelected }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  function handleChange(e) {
    const value = e.target.value;
    setQuery(value);
  }
  function handleResults(items) {
    setResults(items);
  }
  function handleItemSelected(){
    
  }
  return (
    <div>
        {results && <div>{results.length} results</div>}
      <input type="text" onChange={handleChange} value={query} />
      <Results
        items={items}
        onItemSelected={handleItemSelected}
        query={query}
        onResultCalculated={handleResults}
      />
    </div>
  );
}

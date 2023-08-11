import { useState, useMemo, useEffect } from "react";
import MarkedItem from "./markedItem";
export default function Results({
  items,
  onItemSelected,
  query,
  onResultCalculated,
}) {
  const [results, setResults] = useState([]);
  const filteredItems = useMemo(() => findMatch(items, query), [items, query]);

  useEffect(() => {
    onResultCalculated(results);
  }, [results]);
  function findMatch(items, query) {
    const res = items.filter((i) => {
      return i.title.toLowerCase().indexOf(query) >= 0 && query.length > 0;
    });
    setResults(res);
    return res;
  }

  return (
    <div>
      {query !== ""
        ? filteredItems.map((item) => (
            <MarkedItem
              key={item.id}
              query={query}
              item={item}
              onClick={onItemSelected}
            />
          ))
        : ""}
    </div>
  );
}

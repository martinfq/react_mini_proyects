import { useMemo } from "react";

export default function MarkedItem({ item, query, onClick }) {
  const { left, center, right } = useMemo(
    () => getPositions(item, query),
    [item, query]
  );

  function getPositions(item, query) {
    const index = item.title.toLowerCase().indexOf(query);
    const left = item.title.slice(0, index);
    const right = item.title.slice(index + query.length);
    const center = item.title.slice(index, index + query.length);

    return { left, center, right };
  }
  return (
    <button>
      {left}
      <span style={{fontWeigth: 'bolder', backgroundColor:"yellow"}}>{center}</span>
      {right}
    </button>
  );
}

import { useState, useEffect } from "react";
import useFetch from "./useFetch";

export default function TikTok() {
  const [url, setUrl] = useState("");
  const [page, setPage] = useState(0);
  const [res, data, isLoading] = useFetch(url,"json")

  useEffect(()=>{
    setUrl('http://localhost:4000/page/' + page);
  },[page]);

  return isLoading ? "Cargando..." : <div>Hola</div>;
}

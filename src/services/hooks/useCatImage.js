import { useEffect, useState } from "react";

export const useCatImage = (fact) => {

  const [catimg, setCatimg] = useState(null);

  useEffect(() => {
    if (!fact) return;
    let firstsWords = fact.split(" ", 3).join(" ");
    fetch(`https://cataas.com/cat/says/${firstsWords}?color=red`)
      // No convierto a json pq el api ha cambiado y nos devuelve la url de la imagen en lugar de un json
      .then((result) => setCatimg(result.url));
  }, [fact]);
  
  return catimg;
};

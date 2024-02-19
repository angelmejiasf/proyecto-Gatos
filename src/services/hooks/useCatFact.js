import { useEffect, useState } from "react";
import { getNewFact } from "../facts";

export const useCatFact = () => {
  const [fact, setFact] = useState(null);

  const getFact = () => {
    getNewFact().then((newFact) => setFact(newFact));
  };
  
  useEffect(getFact, []);
  return { fact, getFact };
};
export const getNewFact = () => {
  return fetch("https://catfact.ninja/fact")
    .then((data) => data.json())
    .then((result) => result.fact);
};

import { useState } from "react";
import { produce } from "immer";

const Piza = () => {
  const [pizza, setPizza] = useState({
    name: "Margarita",
    toppings: ["cheese"],
  });

  const handleClick = () => {
    setPizza(
      produce((draft) => {
        draft.toppings.push("Bolgarit");
      })
    );
  };

  return (
    <>
      <div>
        {pizza.name}
        {pizza.toppings.map((item) => (
          <li>{item}</li>
        ))}
      </div>
      <button onClick={handleClick}>Piza</button>
    </>
  );
};

export default Piza;

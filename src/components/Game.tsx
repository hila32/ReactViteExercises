import { useState } from "react";
import { produce } from "immer";

const Game = () => {
  const [game, setGame] = useState({
    id: 0,
    player: {
      name: " john",
    },
  });

  const handleClick = () => {
    setGame(
      produce((draft) => {
        draft.player.name = "Bob";
      })
    );
  };

  return (
    <>
      <p>{game.player.name}</p>
      <button onClick={handleClick}>play</button>
    </>
  );
};

export default Game;

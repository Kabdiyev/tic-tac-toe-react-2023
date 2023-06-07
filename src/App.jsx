import { useState } from "react";
import MainLayout from "./layouts/MainLayout";
import Zagruzka from "./components/Zagruzka";
import Grid from "./components/Grid";
import {checkWinCondition} from "./components/Winconditions";


function App() {
  const [grid, setGrid] = useState([
    { id: 1, text: "" },
    { id: 2, text: "" },
    { id: 3, text: "" },
    { id: 4, text: "" },
    { id: 5, text: "" },
    { id: 6, text: "" },
    { id: 7, text: "" },
    { id: 8, text: "" },
    { id: 9, text: "" },
  ]);
  const [user, setUser] = useState(true);
  const [victory, setVictory] = useState(false);
  
  

  function handlePlay(elementID) {
    const newGrid = grid.map((item) => {
      if (item.id === elementID && !item.text) {
        return { ...item, text: user ? "X" : "O" };
      } else return item;
    });
    setUser(!user);
    setGrid(newGrid);

    if (checkWinCondition(newGrid)) {
      setVictory(true); 
    }
  }

  return (
    <MainLayout>
      {victory ? (
        <h2>Victory!</h2>
      ) : (
        <Grid grid={grid} handlePlay={handlePlay} />
      )}
    </MainLayout>
  );
}

export default App;

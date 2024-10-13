import { useState } from "react";
import {
  GameInfo,
  GameTitle,
  GameField,
  useGameState,
} from "../components/game";
import { Header } from "../components/header";

export default function HomePage() {
  const [playersCount] = useState(2);
  const { cells, currentMove, handleCellclick, nextMove } =
    useGameState(playersCount);

  return (
    <div className="bg-slate-50 min-h-screen">
      <Header />
      <main className="pt-6 mx-auto w-max">
        <GameTitle playersCount={playersCount} />
        <GameInfo
          playersCount={playersCount}
          className="mt-4"
          currentMove={currentMove}
        />
        <GameField
          className="mt-6"
          cells={cells}
          currentMove={currentMove}
          nextMove={nextMove}
          handleCellclick={handleCellclick}
        />
      </main>
    </div>
  );
}

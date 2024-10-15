import { useState } from "react";
import {
  GameInfo,
  GameTitle,
  GameField,
  useGameState,
} from "../components/game";
import { Header } from "../components/header";
import { GameSymbol } from "../components/game/game-symbol";
import { UiModel } from "../components/uikit/ui-model";
import { UiButton } from "../components/uikit/ui-button";

export default function HomePage() {
  const [playersCount] = useState(2);
  const {
    cells,
    currentMove,
    handleCellclick,
    nextMove,
    winnerSequence,
    HandlePlayerTimeOver,
    winnerSymbol,
  } = useGameState(playersCount);
  
  return (
    <div className="bg-slate-50 min-h-screen">
      <Header />
      <main className="pt-6 mx-auto w-max">
        <GameTitle playersCount={playersCount} />
        <GameInfo
          playersCount={playersCount}
          className="mt-4"
          currentMove={currentMove}
          isWinner={!!winnerSymbol}
          onPlayerTimeOver={HandlePlayerTimeOver}
        />
        {winnerSymbol && (
          <div className="my-4">
            <GameSymbol symbol={winnerSymbol} />
          </div>
        )}
      <UiModel width="md" isOpen={winnerSymbol} onClose={() => console.log('BAGGG')}>
          <UiModel.Header> Игра завершена! </UiModel.Header>
          <UiModel.Body>
            <div className="text-sm">Победитель: <span className="text-teal-600">Joohn Sina</span></div>
          </UiModel.Body>
          <UiModel.Footer> 

            <UiButton size="mb" variant="outline">
              Вернуться 
            </UiButton>
            <UiButton size="mb" variant="primary">
              Играть снова
            </UiButton>

         </UiModel.Footer>
        </UiModel>

        <GameField
          className="mt-6"
          cells={cells}
          currentMove={currentMove}
          nextMove={nextMove}
          handleCellclick={handleCellclick}
          winnerSequence={winnerSequence}
          winnerSymbol={winnerSymbol}
        />
      </main>
    </div>
  );
}

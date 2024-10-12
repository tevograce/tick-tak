import { useState } from "react";
import { GAME_SYMBOL, MOVE_ORDER } from "./constans";

function getNextMove(currentMove, playersCount) {
  const slicedMpveOrder = MOVE_ORDER.slice(0, playersCount)
  const nextMoveIndex = slicedMpveOrder.indexOf(currentMove) + 1;
  return slicedMpveOrder[nextMoveIndex] ?? slicedMpveOrder[0];
}

export function useGameState(playersCount) {
  const [{ cells, currentMove }, setGameState] = useState(() => ({
    cells: new Array(19 * 19).fill(null),
    currentMove: GAME_SYMBOL.CROSS,
  }));

  const nextMove = getNextMove(currentMove, playersCount);

  const handleCellclick = (index) => {
    setGameState((lastGameState) => {
      if (lastGameState.cells[index]) {
        return lastGameState;
      }
      return {
        ...lastGameState,
        currentMove: getNextMove(lastGameState.currentMove, playersCount),
        cells: lastGameState.cells.map((cell, i) =>
          i === index ? lastGameState.currentMove : cell,
        ),
      };
    });
  };

  return {
    cells,
    currentMove,
    nextMove,
    handleCellclick,
  };
}

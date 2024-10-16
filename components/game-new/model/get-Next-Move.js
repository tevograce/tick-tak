import { MOVE_ORDER } from "../ui/constans";


export function getNextMove(currentMove, playersCount, playersTimeOver) {
  const slicedMpveOrder = MOVE_ORDER.slice(0, playersCount).filter(
    (symbol) => !playersTimeOver.includes(symbol));

  const nextMoveIndex = slicedMpveOrder.indexOf(currentMove) + 1;
  return slicedMpveOrder[nextMoveIndex] ?? slicedMpveOrder[0];
}

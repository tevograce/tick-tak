import { MOVE_ORDER } from "../ui/constans";

export function getNextMove({ currentMove, playersCount, timers }) {
  const slicedMpveOrder = MOVE_ORDER.slice(0, playersCount).filter(
    (symbol) => timers[symbol] > 0);
  const nextMoveIndex = slicedMpveOrder.indexOf(currentMove) + 1;
  return slicedMpveOrder[nextMoveIndex] ?? slicedMpveOrder[0];
}

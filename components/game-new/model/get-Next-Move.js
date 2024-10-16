import { MOVE_ORDER } from "../ui/constans";

export function getNextMove({ currentMove, playersCount }) {
  const slicedMpveOrder = MOVE_ORDER.slice(0, playersCount);
  const nextMoveIndex = slicedMpveOrder.indexOf(currentMove) + 1;
  return slicedMpveOrder[nextMoveIndex] ?? slicedMpveOrder[0];
}

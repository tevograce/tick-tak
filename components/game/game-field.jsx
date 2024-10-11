import clsx from "clsx";
import { ZeroIcon } from "./icons/zero-icon";
import { CrossIcon } from "./icons/cross-icon";
import { UiButton } from "../uikit/ui-button";
import { useState } from "react";
import { GAME_SYMBOL } from "./constans"
import { GameSymbol } from "./game-symbol";


const MOVE_ORDER = [
  GAME_SYMBOL.CROSS,
  GAME_SYMBOL.ZERO,
  GAME_SYMBOL.TRINGLE,
  GAME_SYMBOL.SQUARE,
]

function getNextMove(currentMove) {
  const nextMoveIndex = MOVE_ORDER.indexOf(currentMove) + 1;
  return MOVE_ORDER[nextMoveIndex] ?? MOVE_ORDER[0];
}

export function GameField({ className }) {
  const [{cells, currentMove}, setGameState] = useState(() => ({
    cells: new Array(19 * 19).fill(null),
    currentMove: GAME_SYMBOL.ZERO,
  }))

const nextMove = getNextMove(currentMove);

const handleCellclick = (index) =>  {
  setGameState((lastGameState) =>({
...lastGameState,
currentMove: getNextMove(lastGameState.currentMove),
cells: lastGameState.cells.map((cell, i) => 
  i === index? lastGameState.currentMove : cell 
),
  }));
}

const actions = (
  <>
  <UiButton size="mb" variant="primary">
  Ничья
</UiButton>

<UiButton size="mb" variant="outline">
  Сдаться
</UiButton>
</>
)

  return (
<GameFieldLayout className={className}>
  <GameMoveInfo 
  actions={actions} 
  currentMove={currentMove} 
  nextMove={nextMove}/>
<GameGrid> 
  {cells.map((symbol, index) => (
    <GameCell 
    key={index} 
    onClick={()=> {
      handleCellclick(index);
    }}>
      {symbol && <GameSymbol symbol={symbol} className="w-5 h-5"/>}
    </GameCell>
  ))}
  </GameGrid>
</GameFieldLayout>
);}


function GameCell({ children, onClick }) {
  return (
    <button
      onClick={onClick} 
      className="border border-slate-200 -ml-px -mt-px flex items-center justify-center"> 
      {children}
    </button>
  )}

function GameFieldLayout({ children, className }) {
  return (
    <div
    className={clsx(
      className,
      "bg-white rounded-2xl shadow-md px-8 pt-5 pb-7 ",
    )}
  >{children}</div>
)}

function GameMoveInfo({ actions, currentMove, nextMove }){
  return(
    <div className="flex gap-3 items-center">
      <div className="mr-auto ">
        <div className="flex items-center gap-1 text-xl leading-tight font-semibold">
        Ход: <GameSymbol symbol={currentMove} className="w-5 h-5"/>   
        </div>

      <div className="flex items-center gap-1 text-slate-400 text-xs leading-tight">
        Следующий: <GameSymbol symbol={nextMove} className="w-3 h-3"/>
      </div>
    </div>
      {actions}
    </div>
  )}

function GameGrid({ children }) {
  return (
  <div className="grid grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px)] pl-px pt-px mt-3">
    {children} 
 </div>
  )}

  
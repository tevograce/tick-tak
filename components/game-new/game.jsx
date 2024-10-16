import { PLAYERS } from "./ui/constans";
import { BackLink } from "./ui/game-link";
import { GameInfo } from "./ui/game-info";
import { GameLayout } from "./ui/game-layout";
import { GameTitle } from "./ui/game-title";
import { PlayerInfo } from "./ui/player-info";
import { GameMoveInfo } from "./ui/game-move-info";
import { GameCell } from "./ui/game-cell";
import { useGameState } from "./model/use-game-state";
import { GameOverModal } from "./ui/game-over-modal";

const PLAYERS_COUNT = 2;

export function Game() {
const {cells, currentMove, nextMove, handleCellclick, winnerSequence, winnerSymbol} = useGameState(PLAYERS_COUNT);

const winnerPlayer = PLAYERS.find(player => player.symbol === winnerSymbol)

  return (
    <>
    <GameLayout
      backLink={<BackLink />}
      title={<GameTitle />}
      gameInfo={
        <GameInfo isRatinGame playersCount={PLAYERS_COUNT} timeMode={"1 мин. на ход"} />
      }
      playerList={PLAYERS.slice(0, PLAYERS_COUNT).map((player, index) => (
        <PlayerInfo
          key={player.id}
          avatar={player.avatar}
          name={player.name}
          rating={player.rating}
          seconds={60}
          symbol={player.symbol}
          isRight={index % 2 === 1}
        />
      ))}
      gameMoveInfo={
        <GameMoveInfo 
         currentMove={currentMove} 
         nextMove={nextMove}/>}
      gameCells={cells.map((cell, index) => 
        <GameCell  
          key={index}
          isWinner={winnerSequence?.includes(index)}
          disabled={!!winnerSymbol}
          onClick={() => {
          handleCellclick(index);
      }}
      symbol={cell}
       />

      )}
      
    />
    <GameOverModal
      winnerName={winnerPlayer?.name}
      players={PLAYERS.slice(0, PLAYERS_COUNT).map((player, index) => (
        <PlayerInfo
          key={player.id}
          avatar={player.avatar}
          name={player.name}
          rating={player.rating}
          seconds={60}
          symbol={player.symbol}
          isRight={index % 2 === 1}
        />
      ))}
      />
    </>
  );
}

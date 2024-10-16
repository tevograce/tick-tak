import { PLAYERS } from "./ui/constans";
import { BackLink } from "./ui/game-link";
import { GameInfo } from "./ui/game-info";
import { GameLayout } from "./ui/game-layout";
import { GameTitle } from "./ui/game-title";
import { PlayerInfo } from "./ui/player-info";

export function Game() {
  return (
    <GameLayout
      backLink={<BackLink />}
      title={<GameTitle />}
      gameInfo={
        <GameInfo isRatinGame playersCount={4} timeMode={"1 мин. на ход"} />
      }
      playerList={PLAYERS.map((player, index) => (
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
  );
}

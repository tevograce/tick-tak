import clsx from "clsx";
import { Profile } from "../profile";
import { GameSymbol } from "./game-symbol";
import { GAME_SYMBOL } from "./constans";
import avatarSrc1 from "./images/avatar-1.png";
import avatarSrc2 from "./images/avatar-2.png";
import avatarSrc3 from "./images/avatar-3.png";
import avatarSrc4 from "./images/avatar-4.png";
import { useEffect, useState } from "react";

const players = [
  {
    id: 1,
    name: "Parovovevg",
    rating: 1230,
    avatar: avatarSrc1,
    symbol: GAME_SYMBOL.CROSS,
  },

  {
    id: 2,
    name: "Lera",
    rating: 12,
    avatar: avatarSrc2,
    symbol: GAME_SYMBOL.ZERO,
  },

  {
    id: 3,
    name: "Сакса",
    rating: 432,
    avatar: avatarSrc3,
    symbol: GAME_SYMBOL.TRINGLE,
  },

  {
    id: 4,
    name: "Чип",
    rating: 1,
    avatar: avatarSrc4,
    symbol: GAME_SYMBOL.SQUARE,
  },
];

export function GameInfo({
  className,
  playersCount,
  currentMove,
  isWinner,
  onPlayerTimeOver,
}) {
  return (
    <div
      className={clsx(
        className,
        "bg-white rounded-2xl shadow-md px-8 py-4 justify-between grid grid-cols-2 gap-3",
      )}
    >
      {players.slice(0, playersCount).map((player, index) => (
        <PlayerInfo
          key={player.id} // было players
          playerinfo={player}
          isRight={index % 2 === 1}
          onTimeOver={() => onPlayerTimeOver(player.symbol)}
          isTimerRunning={currentMove === player.symbol && !isWinner}
        />
      ))}
    </div>
  );
}

function PlayerInfo({ playerinfo, isRight, isTimerRunning, onTimeOver }) {
  const [seconds, setSecond] = useState(60);

  const minutesString = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secondsString = String(seconds % 60).padStart(2, "0");
  const isDanger = seconds < 10;

  useEffect(() => {
    if (isTimerRunning) {
      const interval = setInterval(() => {
        setSecond((s) => Math.max(s - 1, 0));
      }, 1000);

      return () => {
        clearInterval(interval);
        setSecond(60);
      };
    }
  }, [isTimerRunning]);

  useEffect(() => {
    if (seconds === 0) {
      onTimeOver();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seconds]);

  const getTimerColor = () => {
    if (isTimerRunning) {
      return isDanger ? "text-orange-600" : "text-slate-900";
    }
    return "text-slate-200";
  };
  return (
    <div className="flex gap-3 items-center">
      <div className={clsx("relative", isRight && "order-3")}>
        <Profile
          className="w-44"
          name={playerinfo.name}
          rating={playerinfo.rating}
          avatar={playerinfo.avatar}
        />
        <div className="w-5 h-5 rounded-full bg-white shadow absolute -left-1 -top-1 flex items-center justify-center">
          <GameSymbol symbol={playerinfo.symbol} />
        </div>
      </div>
      <div className={clsx("h-6 w-px bg-slate-200", isRight && "order-2")} />
      <div
        className={clsx(
          "text-lg font-semibold w-[60px]",
          isRight && "order-1",
          getTimerColor(),
        )}
      >
        {minutesString}:{secondsString}{" "}
      </div>
    </div>
  );
}

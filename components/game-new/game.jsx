import { PLAYERS as INITIAL_PLAYERS } from "./ui/constans";
import { BackLink } from "./ui/game-link";
import { GameInfo } from "./ui/game-info";
import { GameLayout } from "./ui/game-layout";
import { GameTitle } from "./ui/game-title";
import { PlayerInfo } from "./ui/player-info";
import { GameMoveInfo } from "./ui/game-move-info";
import { GameCell } from "./ui/game-cell";
import { GameOverModal } from "./ui/game-over-modal";
import {
  GAME_STATE_ACTIONS,
  gameStateReducer,
  initGameState,
} from "./model/game-state-reducer";
import { computeWinnerSymbol } from "./model/compute-winner-symbol";
import { useCallback, useEffect, useMemo, useReducer, useState } from "react";
import { computeWinner } from "./model/compute-winner";
import { getNextMove } from "./model/get-Next-Move";
import { computePlayerTimer } from "./model/compute-player-timer";
import { useInterval } from "../lib/timers";

export function Game({ playersCount }) {
  const [gameState, dispatch] = useReducer(
    gameStateReducer,
    {
      playersCount,
      defaultTimer: 60000,
      currentMoveStart: Date.now(),
    },
    initGameState,
  );

  const [players, setPlayers] = useState(INITIAL_PLAYERS);

  useEffect(() => {
    const LOGO_CATS = new Headers({
      "Content-Type": "application/json",
      "x-api-key":
        "live_uDPasxIpK4LfPBmHY5dcfH8wBEhtbW317e5aGNPxoewX9iMTfd7qGOiaMZ4wzsTk",
    });

    const requestOptions = {
      method: "GET",
      headers: LOGO_CATS,
      redirect: "follow",
    };

    fetch(
      "https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=4",
      requestOptions,
    )
      .then((response) => response.json())
      .then((data) => {
        const updatedPlayers = INITIAL_PLAYERS.map((player, index) => ({
          ...player,
          avatar: data[index]?.url || player.avatar, // Обновляем аватары, если получили данные
        }));
        setPlayers(updatedPlayers);
      })
      .catch((error) => console.log("Ошибка при загрузке аватаров", error));
  }, []);

  useInterval(
    1000,
    !!gameState.currentMoveStart,
    useCallback(() => {
      dispatch({
        type: GAME_STATE_ACTIONS.TICK,
        now: Date.now(),
      });
    }, []),
  );

  const winnerSequence = useMemo(() => computeWinner(gameState), [gameState]);
  const nextMove = getNextMove(gameState);
  const winnerSymbol = computeWinnerSymbol(gameState, {
    winnerSequence,
    nextMove,
  });

  const winnerPlayer = players.find((player) => player.symbol === winnerSymbol);

  const handleCellClick = useCallback((index) => {
    dispatch({
      type: GAME_STATE_ACTIONS.CELL_CLICK,
      index,
      now: Date.now(),
    });
  }, []);

  const { cells, currentMove } = gameState;

  return (
    <>
      <GameLayout
        backLink={<BackLink />}
        title={<GameTitle />}
        gameInfo={
          <GameInfo
            isRatinGame
            playersCount={playersCount}
            timeMode={"1 мин. на ход"}
          />
        }
        playerList={players.slice(0, playersCount).map((player, index) => {
          const { timer, timerStartAt } = computePlayerTimer(
            gameState,
            player.symbol,
          );
          return (
            <PlayerInfo
              key={player.id}
              avatar={player.avatar}
              name={player.name}
              rating={player.rating}
              symbol={player.symbol}
              timer={timer}
              timerStartAt={timerStartAt}
              isRight={index % 2 === 1}
            />
          );
        })}
        gameMoveInfo={
          <GameMoveInfo currentMove={currentMove} nextMove={nextMove} />
        }
        gameCells={cells.map((cell, index) => (
          <GameCell
            key={index}
            index={index}
            isWinner={winnerSequence?.includes(index)}
            disabled={!!winnerSymbol}
            onClick={handleCellClick}
            symbol={cell}
          />
        ))}
      />
      <GameOverModal
        winnerName={winnerPlayer?.name}
        players={players.slice(0, playersCount).map((player, index) => (
          <PlayerInfo
            key={player.id}
            avatar={player.avatar}
            name={player.name}
            rating={player.rating}
            timer={gameState.timers[player.symbol]}
            symbol={player.symbol}
            isRight={index % 2 === 1}
          />
        ))}
      />
    </>
  );
}

import { HistoryIcon } from "./icons/history-time";
import { StarIcon } from "./icons/star-icon";
import { UserIcon } from "./icons/users-icon";

export function GameInfo({ playersCount, isRatinGame, timeMode }) {
  return (
    <div className="flex items-center gap-3 text-xs text-slate-400">
      {isRatinGame && <StarIcon />}
      <div className="flex items-center gap-1">
        <UserIcon /> {playersCount}
      </div>
      <div className="flex items-center gap-1">
        <HistoryIcon />
        {timeMode}
      </div>
    </div>
  );
}

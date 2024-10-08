import Link from "next/link";
import { ArrowLeftIcon } from "./icons/arrow-left-icon";
import { StarIcon } from "./icons/star-icon";
import { UserIcon } from "./icons/users-icon";
import { HistoryIcon } from "./icons/history-time";


export function GameTitle() {
  return <div className="pl-2 ">
    
    <Link 
    href="#" 
    className="flex items-center gap-2 text-teal-600 text-xs leading-tight -mb-0.5"
    >
    <ArrowLeftIcon/>
    На главную
    </Link>

    <h1 className="text-4xl leading-tight">Кресики нолики</h1>

    <div className="flex items-center gap-3 text-xs text-slate-400"> 
      <StarIcon/>

      <div className="flex items-center gap-1">
        <UserIcon />2
      </div>

      <div className="flex items-center gap-1">
        <HistoryIcon /> 1 мин на ход
      </div>

    </div>
     </div>
}
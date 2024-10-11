import { GAME_SYMBOL } from "./constans"
import { CrossIcon } from "./icons/cross-icon";
import { SquareIcon } from "./icons/square-icon";
import { TringleIcon } from "./icons/tringle-icon";
import { ZeroIcon } from "./icons/zero-icon";


export function GameSymbol({ symbol, className }){
 
const Icon = {
  [GAME_SYMBOL.CROSS]: CrossIcon,
  [GAME_SYMBOL.ZERO]: ZeroIcon,
  [GAME_SYMBOL.TRINGLE]: TringleIcon,
  [GAME_SYMBOL.SQUARE]: SquareIcon,
}[symbol] ?? CrossIcon;

return <Icon className={className}/>

}
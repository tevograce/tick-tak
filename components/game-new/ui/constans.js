import avatarSrc1 from "./images/avatar-1.png";
import avatarSrc2 from "./images/avatar-2.png";
import avatarSrc3 from "./images/avatar-3.png";
import avatarSrc4 from "./images/avatar-4.png";


export const GAME_SYMBOL = {
  ZERO: 'zero',
  CROSS: 'cross',
  TRINGLE: 'tringle',
  SQUARE: 'square',
};

export const MOVE_ORDER = [
  GAME_SYMBOL.CROSS,
  GAME_SYMBOL.ZERO,
  GAME_SYMBOL.TRINGLE,
  GAME_SYMBOL.SQUARE,  
]

export const PLAYERS = [
  {
    id: 1,
    name: "Paravoi",
    rating: 777,
    avatar: avatarSrc1,
    symbol: GAME_SYMBOL.CROSS,
  },

  {
    id: 2,
    name: "Lera",
    rating: 13,
    avatar: avatarSrc2,
    symbol: GAME_SYMBOL.ZERO,
  },

  {
    id: 3,
    name: "Сакса",
    rating: 111,
    avatar: avatarSrc3,
    symbol: GAME_SYMBOL.TRINGLE,
  },

  {
    id: 4,
    name: "Чип",
    rating: 888,
    avatar: avatarSrc4,
    symbol: GAME_SYMBOL.SQUARE,
  },
];
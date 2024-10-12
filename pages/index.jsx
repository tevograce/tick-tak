import { useState } from "react";
import { GameField, GameInfo, GameTitle } from "../components/game";
import { Header } from "../components/header";

export default function HomePage() {

const [playersCount] = useState(2);

  return <div className="bg-slate-50 min-h-screen"> 
  <Header/>
  <main className="pt-6 mx-auto w-max">
    <GameTitle playersCount={playersCount}/>
    <GameInfo playersCount={playersCount} className="mt-4"/>
    <GameField playersCount={playersCount} className="mt-6"/> 

  </main>
  </div>;
}

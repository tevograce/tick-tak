import { Header } from "../components/header";
import { GameTitle } from "../components/game";

export default function HomePage() {
  return <div className="bg-slate-50 min-h-screen"> 
  <Header/>
  <main className="pt-6 mx-auto max-w-[616px]">
    <GameTitle/>

  </main>
  </div>;
}

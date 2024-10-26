import { Header } from "../components/header";
import { Game } from "../components/game-new";
import { InputPersCount } from "../components/uikit/fields/ui-input-count-people";
import { useState } from "react";

export default function HomePage() {
  const [showGame, setShowGame] = useState(false);
  const [playersCount, setPlayersCount] = useState(null);

  const handleGameStart = (count) => {
    setPlayersCount(count);
    setShowGame(true);
  }

  return (
    <HomePageLayout header={<Header />}>
      {showGame ? (
        <Game playersCount={playersCount} />
      ) : (
      <InputPersCount onGameStart={handleGameStart} />
       )}
    </HomePageLayout>
  );
}

function HomePageLayout({ header, children }) {
  return (
    <div className="bg-slate-50 min-h-screen">
      {header}
      <main className="pt-6 mx-auto w-max">{children}</main>
    </div>
  );
}
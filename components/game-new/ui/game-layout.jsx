export function GameLayout({ backLink, title, gameInfo, playerList }) {
  return (
    <div>
      <div className="pl-2 ">
        {backLink}
        {title}
        {gameInfo}
      </div>

      <div
      className={ "mt-4 bg-white rounded-2xl shadow-md px-8 py-4 justify-between grid grid-cols-2 gap-3"}>
        {playerList}
      </div>
    </div>
  );
}
 
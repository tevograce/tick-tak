import { UiButton } from "../../uikit/ui-button";
import { UiModel } from "../../uikit/ui-model";

export function GameOverModal({ winnerName, players }) {
  return (
    <UiModel
      width="md"
      isOpen={winnerName}
      onClose={() => console.log("BAGGG")}
    >
      <UiModel.Header> Игра завершена! </UiModel.Header>
      <UiModel.Body>
        <div className="text-sm">
          Победитель: <span className="text-teal-600">{winnerName}</span>
        </div>

        <div className=" justify-between grid grid-cols-2 gap-3 mt-2">{players}</div>
      </UiModel.Body>
      <UiModel.Footer>
        <UiButton size="mb" variant="outline">
          Вернуться
        </UiButton>
        <UiButton size="mb" variant="primary">
          Играть снова
        </UiButton>
      </UiModel.Footer>
    </UiModel>
  );
}

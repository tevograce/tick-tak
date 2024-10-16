import { UiButton } from "../../uikit/ui-button";
import { UiModel } from "../../uikit/ui-model";


export function GameOverModal(){
  return (
<UiModel width="md" isOpen={winnerSymbol} onClose={() => console.log("BAGGG")}>
  <UiModel.Header> Игра завершена! </UiModel.Header>
  <UiModel.Body>
    <div className="text-sm">
      Победитель: <span className="text-teal-600">Joohn Sina</span>
    </div>
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
  
)}

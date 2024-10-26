import { useEffect, useState } from "react";
import { UiButton } from "../ui-button";
import clsx from "clsx";



export function InputPersCount({ onGameStart }) {
  const [input, setInput] = useState(""); // то что ввел
  const [inputDiry, setInputDiry] = useState(false); // тут проверяем нажато ли поле ввода
  const [inputError, setInputError] = useState("Нужно ввести число"); // тут вылезет ошибка если не ввели
  const [formValid, setFormValid] = useState(false); // валидация формы

  useEffect(() => {
    if (inputError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [inputError]);

  const texthandler = (e) => {
    const value = e.target.value;
    if (!value) {
      setInputError("Введите число");
    } else if (
      value !== '2' &&
      value !== '3' &&
      value !== '4' 
    ) {
      setInputError("Число должно быть 2, 3 или 4");
    } else {
      setInputError("");
    }
    setInput(value);
  };

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "count":
        setInputDiry(true);
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(formValid) {
      onGameStart(parseInt(input));
    }
  }

  function Label() {
    return (
      <div>
        <label className="mb-1 block text-sm text-zinc-500">Введите количество игроков</label>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-xs">
      <div>
        <form onSubmit={handleSubmit}>
          {inputDiry && inputError ? (
            <div className="text-red-700"> {inputError}</div>
          ) : (
            <Label />
          )}

          <div className="relative flex flex-col">
            <input
              onChange={texthandler}
              onBlur={(e) => blurHandler(e)}
              type="text"
              name="count"
              className="p-1 w-full h-10 rounded-md text-xl outline-none border-4 border-teal-600/30 hover:border-teal-600"
            />

            <UiButton
              type="submit"
              disabled={!formValid}
              className={clsx("mt-1", {
                "bg-gray-400 cursor-not-allowed": !formValid,
                "bg-teal-500 hover:bg-teal-600": formValid,
              })}
              variant="primary"
              size="mb"
            >
              Играть
            </UiButton>
          </div>
        </form>
      </div>
    </div>
  );
}

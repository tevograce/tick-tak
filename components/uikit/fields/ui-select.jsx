import { Listbox } from '@headlessui/react';
import { Fragment } from 'react';
import clsx from 'clsx';

/**
 * @param {{
 * options: { label: string, value: string }[],
 * value: string,
 * onChange: (value: string) => void,
 * errorText?: string,
 * className?: string,
 * buttonWidth?: string,  // ширина для кнопки селекта
 * optionsWidth?: string, // ширина для выпадающего списка
 * } & import('react').HTMLAttributes<HTMLDivElement>} props
 */
export function UiSelect({
  options,
  value,
  onChange,
  errorText,
  className,
  buttonWidth = 'w-full',   // ширина кнопки по умолчанию
  optionsWidth = 'w-full',  // ширина выпадающего списка по умолчанию
}) {
  return (
    <div className={className}>
      <Listbox value={value} onChange={onChange}>
        <div className="relative mt-1">
          {/* Кнопка для выбора, с возможностью изменения ширины */}
          <Listbox.Button
            className={clsx(
              buttonWidth, // ширина кнопки задается через пропс
              `
              px-2 py-2 text-sm leading-tight outline-0 border
              block rounded-md shadow-sm
              focus:ring-opacity-50 disabled:cursor-not-allowed
              disabled:bg-gray-50 disabled:text-gray-500
              `,
              errorText
                ? "focus:border-orange-600 focus:ring focus:ring-orange-600/20 border-orange-600"
                : "focus:border-teal-600 focus:ring focus:ring-teal-600/20 border-slate-200"
            )}
          >
            {options.find((option) => option.value === value)?.label || "Select an option"}
          </Listbox.Button>

          {/* Список опций с управляемой шириной */}
          <Listbox.Options
            className={clsx(
              optionsWidth, // ширина списка опций задается через пропс
              `
              absolute z-10 mt-1 bg-white shadow-lg max-h-60 rounded-md py-1 text-sm ring-1 ring-black ring-opacity-5
              focus:outline-none
              `
            )}
          >
            {options.map((option) => (
              <Listbox.Option key={option.value} value={option.value} as={Fragment}>
                {({ active, selected }) => (
                  <li
                    className={clsx(
                      "cursor-pointer select-none relative py-2 pl-10 pr-4",
                      active ? "bg-teal-100 text-teal-900" : "text-gray-900",
                      selected ? "font-medium" : "font-normal"
                    )}
                  >
                    {option.label}
                  </li>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>
      </Listbox>

      {errorText && (
        <p className="mt-1 text-sm text-orange-600">
          {errorText}
        </p>
      )}
    </div>
  );
}

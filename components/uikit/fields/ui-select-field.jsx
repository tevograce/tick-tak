import { UiSelect } from "./ui-select";
import { UiFieldMessage } from "./ui-field-message";
import { UiFieldLabel } from "./ui-field-label";

/**
 * @param {{
 * label?: string,
 * options: { label: string, value: string }[],
 * value: string,
 * onChange: (value: string) => void,
 * helperText?: string,
 * errorText?: string,
 * required?: boolean,
 * className?: string,
 * } & import('react').HTMLAttributes<HTMLDivElement>} props
 */
export function UiSelectField({
  label,
  options,
  value,
  onChange,
  helperText,
  errorText,
  required,
  className,
  ...inputProps
}) {
  return (
    <div className={className}>
      {/* Компонент для метки */}
      <UiFieldLabel label={label} required={required} htmlFor={inputProps.id} />
      
      {/* Компонент для селекта */}
      <UiSelect
        options={options}
        value={value}
        onChange={onChange}
        errorText={errorText}
        {...inputProps}
      />

      {/* Компонент для сообщений (ошибка или вспомогательный текст) */}
      <UiFieldMessage helperText={helperText} errorText={errorText} />
    </div>
  );
}

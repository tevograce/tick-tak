import { UiFieldLabel } from "./ui-field-label";
import { UiFieldMessage } from "./ui-field-message";
import { UiFieldInput } from "./ui-field-input";

/**
 * @param {{
 * label?: string,
 * helperText?: string,
 * errorText?: string,
 * className: string,
 * required?: boolean,
 * } & import('react').HTMLAttributes<HTMLInputElement>} props
 */
export function UiTextField({
  label,
  required,
  helperText,
  errorText,
  className,
  ...inputProps
}) {
  return (
    <div className={className}>
      {/* Рендер метки (label) */}
      <UiFieldLabel label={label} required={required} htmlFor={inputProps.id} />

      {/* Рендер инпута */}
      <UiFieldInput required={required} errorText={errorText} {...inputProps} />

      {/* Рендер сообщения (helperText или errorText) */}
      <UiFieldMessage helperText={helperText} errorText={errorText} />
    </div>
  );
}

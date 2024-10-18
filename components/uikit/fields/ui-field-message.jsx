import clsx from "clsx";

/**
 * @param {{
 * helperText?: string,
 * errorText?: string,
 * } & import('react').HTMLAttributes<HTMLParagraphElement>} props
 */
export function UiFieldMessage({ helperText, errorText, ...messageProps }) {
  if (!helperText && !errorText) return null;

  return (
    <p
      className={clsx(
        "mt-1 text-sm",
        errorText ? "text-orange-600" : "text-slate-400"
      )}
      {...messageProps}
    >
      {errorText ?? helperText}
    </p>
  );
}

import clsx from "clsx";

/**
 * @param {{
 * label?: string,
 * required?: boolean
 * } & import('react').LabelHTMLAttributes<HTMLLabelElement>} props
 */
export function UiFieldLabel({ label, required, ...labelProps }) {
  if (!label) return null;

  return (
    <label
      className={clsx(
        required && "after:text-orange-600 after:content-['*']",
        "mb-1 block text-sm font-medium text-slate-900 after:ml-0.5"
      )}
      {...labelProps}
    >
      {label}
    </label>
  );
}

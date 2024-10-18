import clsx from "clsx";

/**
 * @param {{
 * errorText?: string,
 * className?: string
 * } & import('react').InputHTMLAttributes<HTMLInputElement>} props
 */
export function UiFieldInput({ errorText, className, ...inputProps }) {
  return (
    <input
      className={clsx(
        `
          px-2 py-2 text-sm leading-tight outline-0 border
          block w-full rounded-md shadow-sm 
          focus:ring-opacity-50 disabled:cursor-not-allowed
          disabled:bg-gray-50 disabled:text-gray-500
        `,
        errorText
          ? "focus:border-orange-600 focus:ring focus:ring-orange-600/20 border-orange-600"
          : "focus:border-teal-600 focus:ring focus:ring-teal-600/20 border-slate-200",
        className
      )}
      {...inputProps}
    />
  );
}

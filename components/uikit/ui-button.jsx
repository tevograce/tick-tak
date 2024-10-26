import clsx from "clsx"

/**
 * @param {{
 * children,
 * className: string,
 * size: 'mb' | 'lg',
 * variant: 'primary' | 'outline'
 * }} props
 */

export function UiButton({ children, className, size, variant, disabled, type }) {
  
    const ButtonClassname = clsx(
      'transition-colors', 
      className,
      {
        mb: "rounded  px-6 py-2 text-sm leading-tight",
        lg: "rounded-lg px-5 py-2 text-2xl leading-tight",
      }[size],
      {
        primary: "bg-teal-600 text-white ",
        outline: "border border-teal-600 text-teal-600 hover:bg-teal-50" ,

      }[variant],
    
    )


return (
    <button type={type} disabled={disabled} className={ButtonClassname}>{children}</button>
  )
}
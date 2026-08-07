import clsx from "clsx";
import { buttonVariants } from "./buttonVariants";

export default function Button({
  type = "button",
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  disabled = false,
  isIconOnly = false,
  startIcon,
  endIcon,
  loading = false,
  className,
  ...props
}) {
  return (
    <button
      type={type}
      disabled={disabled || loading}
      className={clsx(
        buttonVariants({
          variant,
          size,
          fullWidth,
          disabled,
          isIconOnly,
        }),
        className
      )}
      {...props}
    >
      {loading ? (
        <span>Loading...</span>
      ) : isIconOnly ? (
        children || startIcon || endIcon
      ) : (
        <>
          {startIcon && (
            <span className="items-center inline-flex">
              {startIcon}
            </span>
          )}

          {children && <span>{children}</span>}

          {endIcon && (
            <span className="items-center inline-flex">
              {endIcon}
            </span>
          )}
        </>
      )}
    </button>
  );
}
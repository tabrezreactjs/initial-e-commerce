import clsx from "clsx";
import { buttonVariants } from "./buttonVariants";

export default function Button({
  type = "button",
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  disabled = false,
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
        }),
        className
      )}
      {...props}
    >
      {loading ? (
        <span>Loading...</span>
      ) : (
        <>
          {startIcon}
          <span>{children}</span>
          {endIcon}
        </>
      )}
    </button>
  );
}
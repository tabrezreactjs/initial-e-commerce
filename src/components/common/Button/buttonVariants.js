import clsx from "clsx";

export function buttonVariants({
  variant = "primary",
  size = "md",
  fullWidth = false,
  disabled = false,
}) {
  return clsx(
    "rounded-xl font-medium inline-flex items-center justify-center cursor-pointer select-none transition-all duration-300",
    {
      // Width
      "w-full": fullWidth,

      // Disabled
      "opacity-50 cursor-not-allowed": disabled,

      // Sizes
      "h-9 text-sm px-4": size === "sm",
      "h-11 text-base px-6": size === "md",
      "h-14 text-lg px-8": size === "lg",

      // Variants
      "bg-blue-600 text-white hover:bg-blue-700":
        variant === "primary",

      "bg-slate-800 text-white hover:bg-slate-900":
        variant === "secondary",

      "border border-slate-300 text-slate-700 hover:bg-slate-100":
        variant === "outline",

      "bg-red-500 text-white hover:bg-red-600":
        variant === "danger",

      "bg-green-600 text-white hover:bg-green-700":
        variant === "success",

      "bg-amber-500 text-white hover:bg-amber-600":
        variant === "warning",

      "bg-cyan-600 text-white hover:bg-cyan-700":
        variant === "info",

      "bg-transparent text-slate-700 hover:bg-slate-100":
        variant === "ghost",
    }
  );
}
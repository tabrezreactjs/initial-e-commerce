import clsx from "clsx";

export default function Input({
  label,
  error,
  id,
  className,
  ...props
}) {
  return (
    <div className="w-full space-y-2">
      {label && (
        <label 
          htmlFor={id} 
          className="text-sm font-medium"
        >
          {label}
        </label>
      )}

      <input
        id={id}
        className={clsx(
          "w-full bg-white border border-slate-300 rounded-xl px-4 py-3 outline-none transition-all",
          "focus:border-blue-500",
          "focus:border-blue-600 focus:ring-4 focus:ring-blue-100",
          error ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-blue-500",
          className
        )}
        {...props}
      />

      {error && (
        <p className="text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}
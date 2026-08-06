import { Link } from "react-router-dom";

export default function Logo({
  size = "text-3xl",
}) {
  return (
    <Link
      to="/"
      className={`font-bold ${size}`}
    >
      <span className="text-blue-600">
        Shop
      </span>

      <span className="text-slate-900">
        X
      </span>
    </Link>
  );
}
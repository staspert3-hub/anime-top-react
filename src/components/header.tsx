import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  return (
    <header
      className="
        fixed top-3 left-1/2 -translate-x-1/2
        flex items-center gap-2
        rounded-2xl border border-white/30 bg-white/10
        backdrop-blur-xl shadow-xl
        px-3 py-1 text-sm
        sm:top-4 sm:px-4 sm:py-2
        md:px-6 md:py-2 md:text-base
        z-50
      "
    >
      <Link
        to="/"
        className={`
          px-3 py-1 rounded-xl font-medium
          text-white/90 hover:bg-white/20 transition-all
          ${location.pathname === "/" ? "bg-white/30 shadow-md" : ""}
          sm:px-4
        `}
      >
        🔥 Топ Аниме
      </Link>

      <Link
        to="/top"
        className={`
          px-3 py-1 rounded-xl
          text-white/80 hover:bg-white/20 hover:text-white transition-all
          ${location.pathname === "/top" ? "bg-white/30 shadow-md" : ""}
          sm:px-4
        `}
      >
        ПРОСМОТРЕНО 🔥
      </Link>
    </header>
  );
}


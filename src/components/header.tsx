import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  
  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 backdrop-blur-xl bg-white/10 border border-white/30 shadow-xl rounded-2xl px-6 py-2 z-50 flex items-center space-x-4">
      <Link to="/" className={`px-4 py-1 rounded-xl font-medium text-white/90 hover:bg-white/20 transition-all ${
        location.pathname === "/" ? "bg-white/30 shadow-md" : ""}`}>
            🔥 Топ Аниме
      </Link>
      <Link to="/top" className={`px-4 py-1 rounded-xl text-white/80 hover:bg-white/20 hover:text-white transition-all ${location.pathname === "/top" ? "bg-white/30 shadow-md" : ""}`}>
        ПРОСМОТРЕНО 🔥
      </Link>
    </header>
  );
}

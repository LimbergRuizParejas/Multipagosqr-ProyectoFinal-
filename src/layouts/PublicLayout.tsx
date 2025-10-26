import { Outlet, Link } from "react-router-dom";
import logo from "../assets/logo.png";

const PublicLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-950 text-gray-100 font-sans">
      {/* ===== Header ===== */}
      <header className="bg-black text-white flex justify-between items-center px-6 py-4 shadow-lg border-b-2 border-red-600">
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Multipagos QR"
            className="w-10 h-10 object-contain drop-shadow-md"
          />
          <h1 className="text-lg sm:text-xl font-extrabold tracking-wide text-white">
            Éxito Pagos <span className="text-red-600">QR</span>
          </h1>
        </div>

        <nav className="flex gap-6 text-sm sm:text-base font-medium">
          <Link
            to="/"
            className="hover:text-red-500 transition-colors duration-200"
          >
            Inicio
          </Link>
          <Link
            to="/historial"
            className="hover:text-red-500 transition-colors duration-200"
          >
            Historial
          </Link>
        </nav>
      </header>

      {/* ===== Contenido principal ===== */}
      <main className="flex-grow bg-gradient-to-b from-neutral-900 to-black">
        <Outlet />
      </main>

      {/* ===== Footer ===== */}
      <footer className="bg-black text-gray-400 text-center text-xs sm:text-sm py-5 border-t border-red-700 shadow-inner">
        © {new Date().getFullYear()}{" "}
        <b className="text-red-500 font-semibold">Exito Pagos QR</b> — Proyecto
        Final Web 3
      </footer>
    </div>
  );
};

export default PublicLayout;

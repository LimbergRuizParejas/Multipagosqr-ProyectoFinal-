import "./App.css";
import { Link } from "react-router-dom";
import AppRouter from "./routes/AppRouter";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans flex flex-col">
      {/* Header */}
      <header className="bg-white shadow p-4 flex justify-between items-center">
        {/* Logo y título */}
        <div className="flex items-center gap-2">
          <img
            src="/vite.svg"
            alt="Logo Multipagos QR"
            className="w-8 h-8 animate-spin-slow"
          />
          <h1 className="text-xl font-bold tracking-tight text-blue-700">
            Éxito Multipagos QR
          </h1>
        </div>

        {/* Navegación */}
        <nav className="flex gap-4 text-sm font-medium">
          <Link
            to="/catalogo"
            className="hover:text-blue-600 transition duration-200"
          >
            Catálogo
          </Link>
          <Link
            to="/historial"
            className="hover:text-blue-600 transition duration-200"
          >
            Historial
          </Link>
          <Link
            to="/proveedor/cargar-deudas"
            className="hover:text-blue-600 transition duration-200"
          >
            Proveedor
          </Link>
          <Link
            to="/admin/reportes"
            className="hover:text-blue-600 transition duration-200"
          >
            Admin
          </Link>
        </nav>
      </header>

      {/* Contenido principal (Router) */}
      <main className="flex-grow">
        <AppRouter />
      </main>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 py-6 border-t mt-8 bg-white">
        © {new Date().getFullYear()} Multipagos QR — Proyecto Final UTB 2025
      </footer>
    </div>
  );
}

export default App;

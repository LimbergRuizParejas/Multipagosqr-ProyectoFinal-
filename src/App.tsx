import "./App.css";
import Inicio from "./pages/Inicio";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans">
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img
            src="/vite.svg"
            alt="Logo Multipagos QR"
            className="w-8 h-8 animate-spin-slow"
          />
          <h1 className="text-xl font-bold tracking-tight">
           
          </h1>
        </div>

        <nav className="flex gap-4 text-sm font-medium">
          <a
            href="https://vite.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
          >
            Vite
          </a>
          <a
            href="https://react.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
          >
            React
          </a>
        </nav>
      </header>

      <main className="flex flex-col items-center py-10 px-4">
        <Inicio />
      </main>

      <footer className="text-center text-sm text-gray-500 py-6 border-t mt-8">
        © {new Date().getFullYear()} Multipagos QR — Proyecto Final 
      </footer>
    </div>
  );
}

export default App;

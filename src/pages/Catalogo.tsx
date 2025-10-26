import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";

// ✅ Categorías principales
const categorias = [
  "Créditos",
  "Servicios básicos",
  "Servicios",
  "Suscripciones",
  "Eventos",
];

// ✅ Empresas del catálogo (desde /public/logos)
const empresas = [
  { nombre: "CRE", logo: "/logos/logocree.jpeg" },
  { nombre: "SAGUAPAC", logo: "/logos/saguapac.jpg" },
  { nombre: "COTAS", logo: "/logos/cotas.png" },
  { nombre: "Multicenter", logo: "/logos/multicenter.jpg" },
  { nombre: "PedidosYa", logo: "/logos/pedidos_ya.png" },
  { nombre: "Tigo", logo: "/logos/tigo.jpg" },
  { nombre: "NUR", logo: "/logos/nur.jpg" },
  { nombre: "OnlyFans", logo: "/logos/onlyfans.jpg" },
];

export default function Catalogo() {
  const [categoriaActiva, setCategoriaActiva] = useState("Créditos");
  const [busqueda, setBusqueda] = useState("");
  const navigate = useNavigate();

  const irAEmpresa = (nombre: string) => {
    navigate(`/empresa/${encodeURIComponent(nombre)}`);
  };

  const empresasFiltradas = useMemo(() => {
    const filtro = busqueda.toLowerCase();
    return empresas.filter((e) => e.nombre.toLowerCase().includes(filtro));
  }, [busqueda]);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-gray-100 text-gray-900 font-sans">
      {/* ===== Banner principal ===== */}
      <header className="relative">
        <img
          src="/logos/logo.png"
          alt="SOAT 2026"
          className="w-full h-56 md:h-64 object-cover opacity-90"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center gap-4 text-center px-4 bg-white/40 backdrop-blur-[2px]">
          <img
            src="/logos/logo.png"
            alt="Logo de Multipagos QR"
            className="w-36 md:w-44 drop-shadow-md"
          />
          <button
            type="button"
            className="bg-red-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-red-700 transition shadow-md focus:outline-none focus:ring-2 focus:ring-red-400"
            onClick={() => navigate("/catalogo")}
          >
            PAGAR AHORA
          </button>
        </div>
      </header>

      {/* ===== Tabs de categorías ===== */}
      <nav
        className="flex justify-center gap-2 bg-white py-4 flex-wrap shadow-md border-b border-gray-200"
        role="tablist"
        aria-label="Categorías de servicios"
      >
        {categorias.map((cat) => {
          const isActive = categoriaActiva === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setCategoriaActiva(cat)}
              role="tab"
              aria-current={isActive ? "true" : undefined}
              className={`px-5 py-2 rounded-md text-sm font-semibold transition ${
                isActive
                  ? "bg-red-600 text-white shadow-sm"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </nav>

      {/* ===== Buscador ===== */}
      <div className="max-w-4xl mx-auto w-full px-6 mt-8">
        <div className="relative">
          <input
            type="text"
            placeholder=" Busca tu servicios o empresa en Exito Pagos QR"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="w-full p-3 pl-10 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-red-400 text-gray-800 placeholder-gray-400"
          />
          <span className="absolute left-3 top-3.5 text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1016.65 16.65z"
              />
            </svg>
          </span>
        </div>
      </div>

      {/* ===== Título principal ===== */}
      <h2 className="text-center text-2xl md:text-3xl font-bold mt-10 text-red-600">
        Paga Tus Servicios con Exito!
      </h2>

      {/* ===== Cuadrícula de empresas ===== */}
      <main className="flex-grow">
        <section
          className="max-w-6xl mx-auto py-10 px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
          aria-label="Empresas disponibles para pago"
        >
          {empresasFiltradas.length > 0 ? (
            empresasFiltradas.map((empresa) => (
              <div
                key={empresa.nombre}
                onClick={() => irAEmpresa(empresa.nombre)}
                className="bg-white border border-gray-200 rounded-xl p-4 flex items-center justify-center shadow-sm hover:shadow-lg hover:border-red-400 hover:scale-105 transition transform cursor-pointer focus:outline-none focus:ring-2 focus:ring-red-400"
                role="button"
                tabIndex={0}
                title={`Pagar en ${empresa.nombre}`}
                onKeyDown={(e) => {
                  if (e.key === "Enter") irAEmpresa(empresa.nombre);
                }}
              >
                <img
                  src={empresa.logo}
                  alt={`Logo de ${empresa.nombre}`}
                  className="object-contain w-full h-24 sm:h-28"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "/logos/default.png";
                  }}
                />
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full mt-6">
              No se encontraron resultados para "<b>{busqueda}</b>"
            </p>
          )}
        </section>
      </main>

      {/* ===== Footer ===== */}
      <footer className="text-center text-xs md:text-sm text-gray-600 py-6 border-t border-gray-300 bg-white">

    
      </footer>
    </div>
  );
}

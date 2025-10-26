import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function EmpresaDetalle() {
  const { nombreEmpresa } = useParams();
  const navigate = useNavigate();

  const [tipoDoc, setTipoDoc] = useState("Carnet de identidad");
  const [numero, setNumero] = useState("");

  // 🖼️ Diccionario de logos
  const logos: Record<string, string> = {
    CRE: "/logos/logocree.jpeg",
    SAGUAPAC: "/logos/saguapac.jpg",
    COTAS: "/logos/cotas.png",
    Multicenter: "/logos/multicenter.jpg",
    PedidosYa: "/logos/pedidos_ya.png",
    Tigo: "/logos/tigo.jpg",
    NUR: "/logos/nur.jpg",
    OnlyFans: "/logos/onlyfans.jpg",
  };

  // 🧩 Determinar logo correspondiente o usar uno por defecto
  const logoEmpresa =
    (nombreEmpresa && logos[nombreEmpresa]) || "/logos/default.png";

  const manejarBuscar = (e: React.FormEvent) => {
    e.preventDefault();
    if (!numero.trim()) {
      alert("Por favor ingrese su número de documento.");
      return;
    }
    console.log(`Buscando deuda para ${numero} en ${nombreEmpresa}`);
  };

  const manejarCancelar = () => navigate("/catalogo");

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-3xl bg-white shadow-2xl rounded-xl overflow-hidden">
        {/* --- Encabezado --- */}
        <header className="flex items-center justify-between p-6 border-b bg-gradient-to-r from-white to-gray-50">
          <div className="flex items-center gap-4">
            <img
              src={logoEmpresa}
              alt={`Logo de ${nombreEmpresa}`}
              className="w-20 h-20 object-contain border rounded-md shadow-sm bg-gray-50"
              onError={(e) =>
                ((e.target as HTMLImageElement).src = "/logos/default.png")
              }
            />
            <div>
              <h2 className="text-2xl font-bold text-red-700 leading-tight">
                {nombreEmpresa || "Empresa"}
              </h2>
              <p className="text-gray-600 text-sm">
                Plataforma de pagos — Servicios y suscripciones
              </p>
            </div>
          </div>

          <div className="bg-red-600 text-white font-bold text-3xl px-6 py-3 rounded-md shadow-md">
            1
          </div>
        </header>

        {/* --- Tabs del proceso --- */}
        <nav className="flex text-sm border-b font-semibold">
          <div className="flex-1 text-center bg-red-100 text-red-700 py-2 border-r border-gray-200">
            1.- Búsqueda
          </div>
          <div className="flex-1 text-center text-gray-400 py-2 border-r border-gray-200">
            2.- Selección
          </div>
          <div className="flex-1 text-center text-gray-400 py-2 border-r border-gray-200">
            3.- Pagar
          </div>
          <div className="flex-1 text-center text-gray-400 py-2">
            4.- Resumen
          </div>
        </nav>

        {/* --- Formulario principal --- */}
        <form
          onSubmit={manejarBuscar}
          className="p-6 space-y-5 bg-white text-gray-800"
        >
          {/* Select accesible */}
          <div>
            <label
              htmlFor="tipoDocumento"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Tipo de documento
            </label>
            <select
              id="tipoDocumento"
              title="Seleccione el tipo de documento"
              value={tipoDoc}
              onChange={(e) => setTipoDoc(e.target.value)}
              className="w-full border rounded-md p-2 focus:ring-2 focus:ring-red-400 outline-none bg-white"
            >
              <option value="Carnet de identidad">Carnet de identidad</option>
              <option value="NIT">NIT</option>
              <option value="Código de cliente">Código de cliente</option>
            </select>
          </div>

          {/* Input accesible */}
          <div>
            <label
              htmlFor="numeroDocumento"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              {tipoDoc}
            </label>
            <input
              id="numeroDocumento"
              type="text"
              value={numero}
              onChange={(e) => setNumero(e.target.value)}
              placeholder={`Ingrese su ${tipoDoc.toLowerCase()}`}
              aria-label="Número de documento"
              className="w-full border rounded-md p-2 focus:ring-2 focus:ring-red-400 outline-none"
            />
          </div>

          {/* Botones */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <button
              type="submit"
              className="flex-1 bg-red-600 text-white py-2 font-semibold rounded-md hover:bg-red-700 transition"
            >
              BUSCAR
            </button>

            <button
              type="button"
              onClick={manejarCancelar}
              className="flex-1 bg-gray-800 text-white py-2 font-semibold rounded-md hover:bg-gray-900 transition"
            >
              CANCELAR
            </button>
          </div>
        </form>
      </div>

      {/* --- Footer --- */}
      <footer className="text-center text-sm text-gray-600 mt-6">
        Multipago · Paga tus servicios · Ayuda
      </footer>
    </div>
  );
}

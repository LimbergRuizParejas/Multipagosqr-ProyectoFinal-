import React, { useState } from "react";

interface Props {
  onBuscar: (ci: string, proveedor: string) => void;
}

const FormularioBusqueda: React.FC<Props> = ({ onBuscar }) => {
  const [ci, setCi] = useState("");
  const [proveedor, setProveedor] = useState("");
  const [error, setError] = useState("");

  const manejarEnvio = (e: React.FormEvent) => {
    e.preventDefault();

    if (!ci.trim() || !proveedor.trim()) {
      setError("Por favor, complete todos los campos antes de continuar.");
      return;
    }

    setError("");
    onBuscar(ci.trim(), proveedor.trim());
  };

  return (
    <div className="w-full max-w-md bg-white border rounded-xl shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4 text-center text-gray-800">
        🔍 Búsqueda de deuda
      </h2>

      <form onSubmit={manejarEnvio} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Número de CI o NIT
          </label>
          <input
            type="text"
            value={ci}
            onChange={(e) => setCi(e.target.value)}
            placeholder="Ejemplo: 7896541"
            className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Proveedor o empresa
          </label>
          <input
            type="text"
            value={proveedor}
            onChange={(e) => setProveedor(e.target.value)}
            placeholder="Ejemplo: CRE, Cotas, SAGUAPAC..."
            className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {error && (
          <p className="text-red-600 text-sm text-center">{error}</p>
        )}

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition"
        >
          Buscar deuda
        </button>
      </form>
    </div>
  );
};

export default FormularioBusqueda;

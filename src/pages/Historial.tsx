import React, { useEffect, useState } from "react";

interface Pago {
  id: number;
  proveedor: string;
  servicio: string;
  monto: number;
  fecha: string;
  estado: string;
}

const Historial: React.FC = () => {
  const [historial, setHistorial] = useState<Pago[]>([]);

  useEffect(() => {
    const datosGuardados = localStorage.getItem("historialPagos");
    if (datosGuardados) {
      setHistorial(JSON.parse(datosGuardados));
    }
  }, []);

  const limpiarHistorial = () => {
    localStorage.removeItem("historialPagos");
    setHistorial([]);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4">
      <div className="w-full max-w-3xl bg-white border rounded-xl shadow-md p-6">
        <h2 className="text-2xl font-semibold text-center mb-4 text-gray-800">
           Historial de pagos
        </h2>

        {historial.length === 0 ? (
          <p className="text-center text-gray-500">
            No hay pagos registrados por el momento.
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="bg-gray-200 text-gray-700">
                  <th className="py-2 px-3 border-b">#</th>
                  <th className="py-2 px-3 border-b">Proveedor</th>
                  <th className="py-2 px-3 border-b">Servicio</th>
                  <th className="py-2 px-3 border-b">Monto (Bs.)</th>
                  <th className="py-2 px-3 border-b">Fecha</th>
                  <th className="py-2 px-3 border-b">Estado</th>
                </tr>
              </thead>
              <tbody>
                {historial.map((pago, index) => (
                  <tr
                    key={pago.id}
                    className={`${
                      index % 2 === 0 ? "bg-gray-50" : "bg-white"
                    } hover:bg-gray-100 transition`}
                  >
                    <td className="py-2 px-3 border-b text-gray-600">
                      {index + 1}
                    </td>
                    <td className="py-2 px-3 border-b">{pago.proveedor}</td>
                    <td className="py-2 px-3 border-b">{pago.servicio}</td>
                    <td className="py-2 px-3 border-b">
                      {pago.monto.toFixed(2)}
                    </td>
                    <td className="py-2 px-3 border-b">{pago.fecha}</td>
                    <td
                      className={`py-2 px-3 border-b font-semibold ${
                        pago.estado === "APROBADO"
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {pago.estado}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {historial.length > 0 && (
          <button
            onClick={limpiarHistorial}
            className="mt-5 w-full py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition"
          >
            Borrar historial
          </button>
        )}
      </div>
    </div>
  );
};

export default Historial;

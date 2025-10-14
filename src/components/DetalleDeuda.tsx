import React from "react";

interface Deuda {
  id: number;
  proveedor: string;
  servicio: string;
  periodo: string;
  monto: number;
  vencimiento: string;
  estado: string;
}

interface Props {
  deuda: Deuda | null;
  onPagar: () => void;
}

const DetalleDeuda: React.FC<Props> = ({ deuda, onPagar }) => {
  if (!deuda) {
    return (
      <div className="mt-6 text-center text-gray-500">
        No se encontró ninguna deuda registrada.
      </div>
    );
  }

  const colorEstado =
    deuda.estado === "PENDIENTE"
      ? "text-yellow-600"
      : deuda.estado === "PAGADA"
      ? "text-green-600"
      : "text-red-600";

  return (
    <div className="mt-6 w-full max-w-md p-5 bg-white border rounded-xl shadow-md">
      <h3 className="text-lg font-bold mb-3 text-gray-800">
        Detalle de la deuda
      </h3>
      <div className="text-sm text-gray-700 space-y-1">
        <p>
          <strong>Proveedor:</strong> {deuda.proveedor}
        </p>
        <p>
          <strong>Servicio:</strong> {deuda.servicio}
        </p>
        <p>
          <strong>Periodo:</strong> {deuda.periodo}
        </p>
        <p>
          <strong>Monto:</strong> Bs. {deuda.monto.toFixed(2)}
        </p>
        <p>
          <strong>Vencimiento:</strong> {deuda.vencimiento}
        </p>
        <p>
          <strong>Estado:</strong>{" "}
          <span className={colorEstado}>{deuda.estado}</span>
        </p>
      </div>

      {deuda.estado === "PENDIENTE" && (
        <button
          onClick={onPagar}
          className="w-full mt-5 bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition"
        >
          Generar QR y realizar pago
        </button>
      )}
    </div>
  );
};

export default DetalleDeuda;

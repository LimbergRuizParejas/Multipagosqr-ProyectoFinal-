import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import Swal from "sweetalert2";

interface Deuda {
  id: number;
  proveedor: string;
  servicio: string;
  periodo: string;
  monto: number;
}

interface Props {
  deuda: Deuda;
  onResultado: (aprobado: boolean) => void;
}

const PagoQR: React.FC<Props> = ({ deuda, onResultado }) => {
  const [procesando, setProcesando] = useState(false);
  const [pagado, setPagado] = useState<boolean | null>(null);

  const simularPago = (): void => {
    if (procesando) return;
    setProcesando(true);

    setTimeout(() => {
      const aprobado = Math.random() > 0.35; // 65% de probabilidad de éxito
      setPagado(aprobado);
      setProcesando(false);

      Swal.fire({
        title: aprobado ? "Pago aprobado " : "Pago rechazado ",
        text: aprobado
          ? "Tu pago fue procesado correctamente."
          : "Hubo un error en la transacción. Inténtalo nuevamente.",
        icon: aprobado ? "success" : "error",
        confirmButtonColor: aprobado ? "#16a34a" : "#d32f2f",
        confirmButtonText: "Aceptar",
      });

      onResultado(aprobado);
    }, 2500);
  };

  return (
    <div className="mt-6 p-5 bg-white border rounded-xl shadow-md w-full max-w-md text-center">
      <h3 className="text-lg font-semibold mb-3 text-gray-800">
        📱 Escanee el código QR para realizar el pago
      </h3>

      <div className="flex justify-center mb-4">
        <QRCodeCanvas
          value={`pago-${deuda.id}-${deuda.proveedor}-${deuda.monto}`}
          size={180}
          bgColor="#ffffff"
          fgColor="#000000"
          level="H"
          includeMargin={true}
        />
      </div>

      <p className="text-sm text-gray-600 mb-4">
        Monto a pagar: <strong>Bs. {deuda.monto.toFixed(2)}</strong>
      </p>

      <button
        onClick={simularPago}
        disabled={procesando}
        className={`w-full py-2 rounded-lg text-white font-medium transition ${
          procesando
            ? "bg-gray-500 cursor-not-allowed"
            : "bg-green-600 hover:bg-green-700"
        }`}
      >
        {procesando ? "Procesando pago..." : "Simular pago"}
      </button>

      {pagado !== null && (
        <p
          className={`mt-4 font-semibold ${
            pagado ? "text-green-700" : "text-red-700"
          }`}
        >
          {pagado ? "Felicidades Pago exitoso" : "Pago rechazado"}
        </p>
      )}
    </div>
  );
};

export default PagoQR;

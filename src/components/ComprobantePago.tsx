import React, { useEffect, useCallback } from "react";
import jsPDF from "jspdf";

interface Props {
  deuda: {
    id: number;
    proveedor: string;
    servicio: string;
    periodo: string;
    monto: number;
    vencimiento: string;
  };
  aprobado: boolean;
}

const ComprobantePago: React.FC<Props> = ({ deuda, aprobado }) => {
  const generarPDF = useCallback(() => {
    const doc = new jsPDF();

    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.text("Comprobante de Pago", 20, 25);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    doc.text(`Proveedor: ${deuda.proveedor}`, 20, 45);
    doc.text(`Servicio: ${deuda.servicio}`, 20, 55);
    doc.text(`Periodo: ${deuda.periodo}`, 20, 65);
    doc.text(`Monto: Bs. ${deuda.monto.toFixed(2)}`, 20, 75);
    doc.text(`Fecha de vencimiento: ${deuda.vencimiento}`, 20, 85);
    doc.text(`ID de transacción: ${deuda.id}`, 20, 95);

    doc.setTextColor(aprobado ? "#008000" : "#D32F2F");
    doc.setFont("helvetica", "bold");
    doc.text(
      `Estado del pago: ${aprobado ? "APROBADO" : "RECHAZADO"}`,
      20,
      115
    );

    doc.setTextColor("#000000");
    doc.setFontSize(10);
    doc.text("Gracias por utilizar Multipagos QR", 20, 135);

    const fecha = new Date();
    doc.text(
      `Generado el: ${fecha.toLocaleDateString()} ${fecha.toLocaleTimeString()}`,
      20,
      145
    );

    doc.save(`comprobante_${deuda.id}.pdf`);
  }, [deuda, aprobado]);

  useEffect(() => {
    generarPDF();
  }, [generarPDF]);

  return (
    <div className="mt-6 p-4 border rounded-xl bg-white shadow text-center">
      <h3 className="text-lg font-semibold mb-2">📄 Comprobante de pago</h3>
      <p className="text-gray-700">
        El comprobante se generó automáticamente. Si no se descargó, puede hacerlo manualmente.
      </p>
      <button
        onClick={generarPDF}
        className="mt-4 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition"
      >
        Descargar comprobante
      </button>
    </div>
  );
};

export default ComprobantePago;

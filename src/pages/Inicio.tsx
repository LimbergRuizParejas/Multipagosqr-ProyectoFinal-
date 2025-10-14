import React, { useState } from "react";
import FormularioBusqueda from "../components/FormularioBusqueda";
import DetalleDeuda from "../components/DetalleDeuda";
import PagoQR from "../components/PagoQR";
import ComprobantePago from "../components/ComprobantePago";
import Notificacion from "../components/Notificacion";
import { buscarDeuda } from "../services/apiSimulada";
import logo from "../assets/logo.png";

interface Deuda {
  id: number;
  proveedor: string;
  servicio: string;
  periodo: string;
  monto: number;
  vencimiento: string;
  estado: string;
}

const Inicio: React.FC = () => {
  const [deuda, setDeuda] = useState<Deuda | null>(null);
  const [mostrarQR, setMostrarQR] = useState(false);
  const [pagado, setPagado] = useState<boolean | null>(null);
  const [mensaje, setMensaje] = useState<{ tipo: "exito" | "error" | "info"; texto: string } | null>(null);

  const manejarBusqueda = (ci: string, proveedor: string) => {
    const resultado = buscarDeuda(ci, proveedor);

    if (resultado) {
      setDeuda(resultado);
      setMostrarQR(false);
      setPagado(null);
      setMensaje({ tipo: "exito", texto: "Deuda encontrada correctamente." });
    } else {
      setDeuda(null);
      setMensaje({ tipo: "error", texto: "No se encontró ninguna deuda con esos datos." });
    }
  };

  const manejarPago = (aprobado: boolean) => {
    setPagado(aprobado);
    setMostrarQR(false);

    const nuevaDeuda = deuda
      ? { ...deuda, estado: aprobado ? "PAGADA" : "RECHAZADA" }
      : null;
    setDeuda(nuevaDeuda);

    const registro = {
      id: deuda?.id || Date.now(),
      proveedor: deuda?.proveedor || "",
      servicio: deuda?.servicio || "",
      monto: deuda?.monto || 0,
      fecha: new Date().toLocaleString(),
      estado: aprobado ? "APROBADO" : "RECHAZADO",
    };

    const historial = JSON.parse(localStorage.getItem("historialPagos") || "[]");
    historial.push(registro);
    localStorage.setItem("historialPagos", JSON.stringify(historial));

    setMensaje({
      tipo: aprobado ? "exito" : "error",
      texto: aprobado ? "Pago realizado con éxito." : "El pago fue rechazado.",
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4">
      <div className="w-full max-w-3xl">
     <div className="flex justify-center mb-6">
  <img
    src={logo}
    alt="Logo Multipagos QR"
    className="w-40 h-auto drop-shadow-md hover:scale-105 transition-transform duration-300"
  />
</div>


        {!deuda && <FormularioBusqueda onBuscar={manejarBusqueda} />}

        {deuda && !mostrarQR && pagado === null && (
          <DetalleDeuda deuda={deuda} onPagar={() => setMostrarQR(true)} />
        )}

        {mostrarQR && deuda && (
          <PagoQR deuda={deuda} onResultado={manejarPago} />
        )}

        {pagado !== null && deuda && (
          <ComprobantePago deuda={deuda} aprobado={pagado} />
        )}
      </div>

      {mensaje && (
        <Notificacion
          tipo={mensaje.tipo}
          mensaje={mensaje.texto}
          alCerrar={() => setMensaje(null)}
        />
      )}
    </div>
  );
};

export default Inicio;

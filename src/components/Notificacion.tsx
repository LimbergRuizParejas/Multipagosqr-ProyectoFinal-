import React, { useEffect } from "react";
import "../assets/notificacion.css";

interface Props {
  tipo: "exito" | "error" | "info";
  mensaje: string;
  alCerrar?: () => void;
}

const Notificacion: React.FC<Props> = ({ tipo, mensaje, alCerrar }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (alCerrar) alCerrar();
    }, 3500);
    return () => clearTimeout(timer);
  }, [alCerrar]);

  const estilos = {
    exito: "bg-green-100 border-green-500 text-green-700",
    error: "bg-red-100 border-red-500 text-red-700",
    info: "bg-blue-100 border-blue-500 text-blue-700",
  };

  const iconos = {
    exito: "✅",
    error: "❌",
    info: "ℹ️",
  };

  return (
    <div
      className={`notificacion fixed bottom-6 right-6 border-l-4 p-4 rounded-xl shadow-lg animate-fadeIn ${estilos[tipo]}`}
    >
      <div className="flex items-center">
        <span className="text-2xl mr-3">{iconos[tipo]}</span>
        <p className="text-sm font-medium">{mensaje}</p>
      </div>
    </div>
  );
};

export default Notificacion;

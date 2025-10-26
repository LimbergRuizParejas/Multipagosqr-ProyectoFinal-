import { Routes, Route } from "react-router-dom";

// --- Layouts ---
import PublicLayout from "../layouts/PublicLayout";
import ProviderLayout from "../layouts/ProviderLayout";
import AdminLayout from "../layouts/AdminLayout";

// --- Páginas públicas ---
import Catalogo from "../pages/Catalogo";
import EmpresaDetalle from "../pages/EmpresaDetalle";
import Historial from "../pages/Historial";

// --- Panel del proveedor ---
import CargarDeudas from "../Provider/CargarDeudas";
import PagosRecibidos from "../Provider/PagosRecibidos";

// --- Panel del administrador ---
import Empresas from "../Admin/Empresas";
import Reportes from "../Admin/Reportes";

// --- Página 404 ---
function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800">
      <h1 className="text-5xl font-bold mb-3">404</h1>
      <p className="text-lg mb-4">Página no encontrada</p>
      <a
        href="/"
        className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Volver al inicio
      </a>
    </div>
  );
}

// --- Definición principal de rutas ---
export default function AppRouter() {
  return (
    <Routes>
      {/* --- Público --- */}
      <Route element={<PublicLayout />}>
        <Route index element={<Catalogo />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/empresa/:nombreEmpresa" element={<EmpresaDetalle />} />
        <Route path="/historial" element={<Historial />} />
      </Route>

      {/* --- Panel de proveedor --- */}
      <Route element={<ProviderLayout />}>
        <Route path="/proveedor/cargar-deudas" element={<CargarDeudas />} />
        <Route path="/proveedor/pagos" element={<PagosRecibidos />} />
      </Route>

      {/* --- Panel de administrador --- */}
      <Route element={<AdminLayout />}>
        <Route path="/admin/empresas" element={<Empresas />} />
        <Route path="/admin/reportes" element={<Reportes />} />
      </Route>

      {/* --- Página no encontrada --- */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

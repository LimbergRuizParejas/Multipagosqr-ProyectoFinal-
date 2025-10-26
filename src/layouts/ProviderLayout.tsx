import { Outlet, Link } from "react-router-dom";

const ProviderLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="bg-green-700 text-white flex justify-between items-center px-6 py-3">
        <h1 className="text-lg font-semibold">Panel del Proveedor</h1>
        <nav className="flex gap-4 text-sm font-medium">
          <Link to="/proveedor/cargar-deudas" className="hover:text-lime-200 transition">Cargar Deudas</Link>
          <Link to="/proveedor/pagos" className="hover:text-lime-200 transition">Pagos Recibidos</Link>
        </nav>
      </header>

      <main className="flex-grow p-4">
        <Outlet />
      </main>
    </div>
  );
};

export default ProviderLayout;

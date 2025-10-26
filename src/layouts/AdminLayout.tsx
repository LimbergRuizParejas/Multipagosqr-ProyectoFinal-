import { Outlet, Link } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="bg-blue-800 text-white flex justify-between items-center px-6 py-3">
        <h1 className="text-lg font-semibold">Panel de Administración</h1>
        <nav className="flex gap-4 text-sm font-medium">
          <Link to="/admin/empresas" className="hover:text-lime-300 transition">Empresas</Link>
          <Link to="/admin/reportes" className="hover:text-lime-300 transition">Reportes</Link>
        </nav>
      </header>

      <main className="flex-grow p-4">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;

import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-800 text-white">
      <div className="p-4">
        <h2 className="text-xl font-semibold">School Admin</h2>
      </div>
      <nav className="mt-6">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `block px-4 py-2 ${isActive ? 'bg-gray-700' : 'hover:bg-gray-700'}`
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/students"
          className={({ isActive }) =>
            `block px-4 py-2 ${isActive ? 'bg-gray-700' : 'hover:bg-gray-700'}`
          }
        >
          Students
        </NavLink>
        {/* Add more nav items */}
      </nav>
    </div>
  );
}
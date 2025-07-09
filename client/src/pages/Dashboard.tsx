import { useAuth } from '../contexts/AuthContext';
import Sidebar from '../components/Layout/Sidebar';
import Header from '../components/Layout/Header';

export default function Dashboard() {
  const { user, logout } = useAuth();

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header onLogout={logout} />
        <main className="flex-1 overflow-y-auto p-4">
          <h1 className="text-2xl font-semibold">Welcome, {user?.firstName}</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            {/* Dashboard widgets */}
          </div>
        </main>
      </div>
    </div>
  );
}
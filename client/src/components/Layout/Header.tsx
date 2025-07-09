import { useAuth } from '../../contexts/AuthContext';

interface HeaderProps {
  onLogout: () => void;
}

export default function Header({ onLogout }: HeaderProps) {
  const { user } = useAuth();
  
  return (
    <header className="bg-white shadow-sm">
      <div className="flex justify-between items-center px-4 py-3">
        <div>Welcome, {user?.firstName}</div>
        <button
          onClick={onLogout}
          className="text-red-600 hover:text-red-800"
        >
          Logout
        </button>
      </div>
    </header>
  );
}
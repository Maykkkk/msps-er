import { Routes, Route, Outlet } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './pages/Shared/ProtectedRoute';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Students from './pages/Students';
import CreateStudent from './pages/Students/CreateStudent';
import Unauthorized from './pages/Unauthorized';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
        
        <Route element={<ProtectedRoute />}>
          <Route index element={<Dashboard />} />
          <Route path="students">
            <Route index element={<Students />} />
            <Route path="create" element={<CreateStudent />} />
          </Route>
        </Route>
        
        <Route element={<ProtectedRoute roles={['admin']} />}>
          <Route path="admin" element={<div>Admin Panel</div>} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
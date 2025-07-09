import { Link } from 'react-router-dom';

export default function Unauthorized() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">403 - Unauthorized</h1>
      <p className="mb-4">You don't have permission to access this page</p>
      <Link to="/" className="text-blue-600 hover:underline">
        Return to Dashboard
      </Link>
    </div>
  );
}
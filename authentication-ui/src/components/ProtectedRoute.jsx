function ProtectedRoute({ user }) {
  if (!user) {
    return (
      <div className="p-6 bg-red-600 rounded-lg text-white shadow-md">
        <h1 className="text-2xl font-bold mb-2">Access Denied</h1>
        <p>You do not have permission to view this page. Please log in.</p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-green-600 rounded-lg text-white shadow-md">
      <h1 className="text-2xl font-bold mb-2">Protected Route</h1>
      <p>This is a protected route. Only authenticated users can see this.</p>
    </div>
  );
}

export default ProtectedRoute;

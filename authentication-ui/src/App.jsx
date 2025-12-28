import { useState } from "react";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import AuthToggle from "./components/AuthToggle";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [user, setUser] = useState(null);

  function handleAuthSubmit(data) {
    console.log(isLogin ? "Login data:" : "Register data:", data);
    setUser(data)
  }

  return (
    <div className="min-h-screen bg-gray-300 flex flex-col items-center justify-center">
      {!user ? (
        <div>
          {isLogin ? (
            <LoginForm onSubmit={handleAuthSubmit} setUser={setUser} />
          ) : (
            <RegisterForm onSubmit={handleAuthSubmit} setUser={setUser} />
          )}
          <div className="text-center">
            <p className="mt-4 text-center text-sm text-gray-600">
              {isLogin
                ? "Don't have an account? "
                : "Already have an account? "}
            </p>
              <AuthToggle isLogin={isLogin} setIsLogin={setIsLogin} />
          </div>
        </div>
      ): (
        <div>
          <ProtectedRoute user={user} />
          <button
            onClick={() => setUser(null)}
            className="mt-4 w-full rounded-md bg-white py-2 font-medium text-black transition
                       hover:bg-white/80"
          >
            Logout
          </button>
        </div>
      )}



    </div>
  );
}

export default App;

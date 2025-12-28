function AuthToggle({ isLogin, setIsLogin }) {
  return (
    <div className="flex gap-2 items-center justify-center">
      <button
        className="hover:text-black/50 hover:underline"
        onClick={() => setIsLogin(true)}
        disabled={isLogin}
      >
        Login
      </button>

      <button
        className="hover:text-black/50 hover:underline"
        onClick={() => setIsLogin(false)}
        disabled={!isLogin}
      >
        Register
      </button>
    </div>
  );
}

export default AuthToggle;

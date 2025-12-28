import { useState } from "react";

function LoginForm({ onSubmit }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleValidation(e) {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      setError("Please fill in all fields");
      return;
    }

    setError("");
    onSubmit?.({ email, password });
    setEmail("");
    setPassword("");
  }

  return (
    <div className="w-full flex flex-col justify-center items-center max-w-sm rounded-xl bg-black/70 p-6 shadow-lg backdrop-blur-sm">
    <form
      onSubmit={handleValidation}
    >
      <h2 className="mb-6 text-center text-2xl font-semibold text-white">
        Login
      </h2>

      <div className="mb-4">
        <input
          id="email"
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-md bg-black/40 px-3 py-2 text-white placeholder-gray-300
                     outline-none ring-1 ring-white/10 transition
                     focus:ring-2 focus:ring-white/40"
        />
      </div>

      <div className="mb-4">
        <input
          id="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-md bg-black/40 px-3 py-2 text-white placeholder-gray-300
                     outline-none ring-1 ring-white/10 transition
                     focus:ring-2 focus:ring-white/40"
        />
      </div>

      {error && (
        <p className="mb-4 rounded-md bg-red-500/10 px-3 py-2 text-sm text-red-400">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={!email.trim() || !password.trim()}
        className="w-full rounded-md bg-white py-2 font-medium text-black transition
                   hover:bg-white/80
                   disabled:cursor-not-allowed disabled:bg-gray-400"
      >
        Login
      </button>
    </form>
    </div>

  );
}

export default LoginForm;

import { useState } from "react";

function RegisterForm({ onSubmit }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  function handleValidation(e) {
    e.preventDefault();

    if (
      !username.trim() ||
      !email.trim() ||
      !password.trim() ||
      !confirmPassword.trim()
    ) {
      setError("Please fill in all fields");
      return;
    }

    if (password.length < 10) {
      setError("Password must be at least 10 characters long");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setError("");
    onSubmit?.({ username, email, password });

    setUsername("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  }

  return (
    <form
      onSubmit={handleValidation}
      className="w-full max-w-sm rounded-xl bg-black/70 p-6 shadow-lg backdrop-blur-sm"
    >
      <h2 className="mb-6 text-center text-2xl font-semibold text-white">
        Register
      </h2>

      <div className="mb-4">
        <input
          type="text"
          name="username"
          autoComplete="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full rounded-md bg-black/40 px-3 py-2 text-white placeholder-gray-300
                     outline-none ring-1 ring-white/10 transition
                     focus:ring-2 focus:ring-white/40"
        />
      </div>

      {/* Email */}
      <div className="mb-4">
        <input
          type="email"
          name="email"
          autoComplete="email"
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
          type="password"
          name="password"
          autoComplete="new-password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-md bg-black/40 px-3 py-2 text-white placeholder-gray-300
                     outline-none ring-1 ring-white/10 transition
                     focus:ring-2 focus:ring-white/40"
        />
      </div>

      <div className="mb-4">
        <input
          type="password"
          name="confirmPassword"
          autoComplete="new-password"
          placeholder="Confirm password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
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
        disabled={
          !username.trim() ||
          !email.trim() ||
          !password.trim() ||
          !confirmPassword.trim()
        }
        className="w-full rounded-md bg-white py-2 font-medium text-black transition
                   hover:bg-white/80
                   disabled:cursor-not-allowed disabled:bg-gray-400"
      >
        Register
      </button>
    </form>
  );
}

export default RegisterForm;

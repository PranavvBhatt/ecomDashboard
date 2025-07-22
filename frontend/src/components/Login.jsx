import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  }, [navigate]);

  const handleLogin = async () => {
    if (!email || !password) {
      toast.warn("Please fill in both email and password.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5001/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();
      if (response.ok && result?.message === "Login successful") {
        localStorage.setItem("user", JSON.stringify(result));
        toast.success("Login successful!");
        navigate("/");
      } else {
        toast.error(result.message || "Invalid login credentials.");
      }
    } catch (error) {
      toast.error("Server error. Please try again later.");
      console.error("Login error:", error);
    }
  };

  return (
    <div className="relative min-h-screen w-full">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/login.jpg')" }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-0"></div>

      {/* Login Form */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="max-w-sm w-full p-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl text-white">
          <div className="flex flex-col items-center gap-3 mb-4">
            <div className="bg-blue-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.121 17.804A6 6 0 1118.93 17.804M12 14v.01"
                />
              </svg>
            </div>
            <h1 className="text-2xl font-extrabold text-center">LOGIN USER</h1>
            <p className="text-sm text-center text-white/80">
              Welcome back! Please login to your account.
            </p>
          </div>

          <input
            className="px-4 py-3 mb-3 rounded-md border border-white/30 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="email"
            value={email}
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="username"
          />
          <input
            className="px-4 py-3 mb-5 rounded-md border border-white/30 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            autoComplete="current-password"
          />
          <button
            onClick={handleLogin}
            className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-800 hover:to-blue-600 text-white font-bold py-3 rounded-lg shadow-lg transition duration-300"
          >
            Login
          </button>

          <div className="flex justify-between text-sm text-white/70 mt-4">
            <button className="hover:underline hover:text-white">
              Forgot password?
            </button>
            <Link to="/signup" className="hover:underline hover:text-white">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

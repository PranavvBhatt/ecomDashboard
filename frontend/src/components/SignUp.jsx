import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const [name, setName] = useState("");
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
    if (!name || !email || !password) {
      toast.warn("Please fill in all the fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    try {
      let result = await fetch("http://localhost:5001/register", {
        method: "POST",
        body: JSON.stringify({ name, email, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      result = await result.json();
      localStorage.setItem("user", JSON.stringify(result));
      if (result) {
        toast.success("Registration successful!");
        navigate("/");
      }
    } catch (err) {
      toast.error("Registration failed!");
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

      {/* Signup Form */}
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
            <h1 className="text-2xl font-extrabold text-center">REGISTER</h1>
            <p className="text-sm text-center text-white/80">
              Create your free account below.
            </p>
          </div>

          <input
            className="w-full px-4 py-3 mb-3 rounded-md border border-white/30 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Name"
            autoComplete="username"
          />

          <input
            className=" w-full px-4 py-3 mb-3 rounded-md border border-white/30 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email"
            autoComplete="email"
          />

          <input
            className=" w-full px-4 py-3 mb-5 rounded-md border border-white/30 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
            autoComplete="new-password"
          />

          <button
            onClick={handleLogin}
            className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-800 hover:to-blue-600 text-white font-bold py-3 rounded-lg shadow-lg transition duration-300"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

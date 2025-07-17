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
        navigate("/");
      }
    } catch (err) {
      alert("Registration failed!");
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-16 p-8 bg-gradient-to-br from-white via-blue-50 to-blue-100 rounded-2xl shadow-2xl flex flex-col gap-6 border border-blue-200">
      <div className="flex flex-col items-center gap-2">
        <span className="inline-flex items-center justify-center bg-blue-600 text-white rounded-full w-14 h-14 shadow-lg mb-2">
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
            ></path>
          </svg>
        </span>
        <h1 className="text-2xl font-extrabold text-center text-blue-800 mb-1">
          Register
        </h1>
        <p className="text-blue-500 text-center text-sm">
          Create your free account below.
        </p>
      </div>

      <input
        className="inputbox px-4 py-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition bg-blue-50 placeholder-blue-400 text-blue-900 shadow-sm"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Name"
        autoComplete="username"
      />

      <input
        className="inputbox px-4 py-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition bg-blue-50 placeholder-blue-400 text-blue-900 shadow-sm"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter Email"
        autoComplete="email"
      />

      <input
        className="inputbox px-4 py-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition bg-blue-50 placeholder-blue-400 text-blue-900 shadow-sm"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter Password"
        autoComplete="new-password"
      />

      <button
        onClick={handleLogin}
        className="w-full bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-800 hover:to-cyan-500 text-white font-bold py-3 rounded-lg shadow-md transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl text-lg tracking-wider"
      >
        Sign Up
      </button>
    </div>
  );
};

export default SignUp;

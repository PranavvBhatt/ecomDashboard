import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/signup");
  };

  return (
    <nav className="bg-gray-800 p-3 ">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Left: Navigation links */}
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="text-white text-l hover:text-blue-400">
              Products
            </Link>
          </li>
          <li>
            <Link to="/add" className="text-white text-l hover:text-blue-400">
              Add Product
            </Link>
          </li>
          <li>
            <Link
              to="/update"
              className="text-white text-l hover:text-blue-400"
            >
              Update Product
            </Link>
          </li>
          <li>
            <Link
              to="/profile"
              className="text-white text-l hover:text-blue-400"
            >
              Profile
            </Link>
          </li>

          {auth ? (
            <li>
              {" "}
              <Link onClick={logout}  className="text-white text-l hover:text-blue-400" to="/login">
                Logout
              </Link>
            </li>
          ) : (
            <>
              <Link
                to="/signup"
                className="text-white text-l hover:text-blue-400"
              >
                
              </Link>
              <Link
                to="/login"
                className="text-white text-l hover:text-blue-400"
              >
                login
              </Link>
            </>
          )}
        </ul>
        {/* Right: Company logo */}
        <Link to="/" className="ml-6">
          <span className="inline-flex items-center justify-center bg-blue-600 text-white rounded-full w-7 h-7 shadow-lg">
            {/* Logo SVG */}
            <svg
              className="w-5 h-5"
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
        </Link>
      </div>
    </nav>
  );
};

export default Nav;

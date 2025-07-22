import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  const  auth = localStorage.getItem("user");
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/signup");
  };

  return (
    <nav className="bg-gray-800 bg-opacity-80 fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-3">

       
        <div>
          <Link to="/" className="ml-6">
            <span className="inline-flex items-center justify-center bg-blue-600 text-white rounded-full w-8 h-8 shadow-lg">
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

        
        {auth && (
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="text-white hover:text-blue-400">
                Products
              </Link>
            </li>
            <li>
              <Link to="/add" className="text-white hover:text-blue-400">
                Add Product
              </Link>
            </li>
            <li>
              <Link to="/update" className="text-white hover:text-blue-400">
                Update Product
              </Link>
            </li>
            <li>
              <Link to="/profile" className="text-white hover:text-blue-400">
                Profile
              </Link>
            </li>
          </ul>
        )}

        
        <div className="flex space-x-4">
          {auth ? (
            <Link
              onClick={logout}
              to="/login"
              className="text-white hover:text-red-400"
            >
              Logout
            </Link>
          ) : (
            <>
              <Link to="/signup" className="text-white hover:text-blue-400">
                SignUp
              </Link>
              <Link to="/login" className="text-white hover:text-blue-400">
                Login
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;

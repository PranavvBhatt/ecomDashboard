import { useState } from "react";
import Nav from "./components/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import PrivateComponent from "./components/PrivateComponent";
import SignUp from "./components/SignUp";
import Login from "./components/Login";

import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <BrowserRouter>
        <Nav />
        <main className="flex-1 flex flex-col items-center justify-center py-8">
          <Routes>
            <Route element={<PrivateComponent />}>
              <Route
                path="/"
                element={
                  <h1 className="text-3xl font-semibold text-blue-700 mb-4">
                    Product Listing Component
                  </h1>
                }
              />
              <Route
                path="/add"
                element={
                  <h1 className="text-3xl font-semibold text-green-700 mb-4">
                    Add Product Here
                  </h1>
                }
              />
              <Route
                path="/update"
                element={
                  <h1 className="text-3xl font-semibold text-yellow-700 mb-4">
                    Update Product Here
                  </h1>
                }
              />
              <Route
                path="/logout"
                element={
                  <h1 className="text-3xl font-semibold text-red-700 mb-4">
                    Logout Here
                  </h1>
                }
              />
              <Route
                path="/profile"
                element={
                  <h1 className="text-3xl font-semibold text-purple-700 mb-4">
                    View Profile Here
                  </h1>
                }
              />
            </Route>

            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            
          </Routes>
        </main>
        <ToastContainer position="top-center" autoClose={3000} />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

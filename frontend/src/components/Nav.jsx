import React from 'react'
import { Link } from 'react-router-dom';


const Nav = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <ul className="flex space-x-6">
                <li>
                    <Link to="/" className="text-white hover:text-blue-400">Products</Link>
                </li>
                <li>
                    <Link to="/add" className="text-white hover:text-blue-400">Add Product</Link>
                </li>
                <li>
                    <Link to="/update" className="text-white hover:text-blue-400">Update Product</Link>
                </li>
                <li>
                    <Link to="/logout" className="text-white hover:text-blue-400">Logout</Link>
                </li>
                <li>
                    <Link to="/profile" className="text-white hover:text-blue-400">Profile</Link>
                </li>

               < li>
                    <Link to="/signup" className="text-white hover:text-blue-400">SignUp</Link>
                </li>






            </ul>
        </nav>
    )
}

export default Nav;

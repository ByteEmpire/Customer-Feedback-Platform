// src/components/Navbar.js

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold text-blue-600">FeedbackFlow</h1>
        <div className="flex space-x-6">
          <Link to="/" className="text-gray-800 font-medium hover:text-blue-600">
            Home
          </Link>
          <Link to="/about" className="text-gray-800 font-medium hover:text-blue-600">
            About
          </Link>
          <Link to="/contact-us" className="text-gray-800 font-medium hover:text-blue-600">
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

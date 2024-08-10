import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-600 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          Your Farm
        </div>
        <div className="md:hidden">
          <button 
            onClick={toggleMenu} 
            className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
        <ul className={`flex-col md:flex md:flex-row md:space-x-4 absolute md:static bg-blue-600 md:bg-transparent w-full md:w-auto transition-all duration-300 ease-in-out ${isOpen ? 'top-16 left-0' : 'top-[-490px]'}`}>
          <li className="text-center md:text-left">
            <Link to="/" className="block text-white hover:text-gray-300 py-2 px-4">
              Home
            </Link>
          </li>
          <li className="text-center md:text-left">
            <Link to="/about" className="block text-white hover:text-gray-300 py-2 px-4">
              About
            </Link>
          </li>
          <li className="text-center md:text-left">
            <Link to="/contact" className="block text-white hover:text-gray-300 py-2 px-4">
              Contact
            </Link>
          </li>
          <li className="text-center md:text-left">
            <Link to="/product" className="block text-white hover:text-gray-300 py-2 px-4">
              Product
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

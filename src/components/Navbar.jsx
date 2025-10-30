import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-pink-600 text-white px-8 py-5 flex justify-between items-center shadow-md mb-10 w-full">
      {/* Logo / Brand */}
      <h1 className="text-2xl font-bold tracking-wide">MyReactApp</h1>

      {/* Navigation Links */}
      <ul className="hidden md:flex space-x-6">
        <li><a href="#" className="hover:text-gray-200 transition-colors">Home</a></li>
        <li><a href="#" className="hover:text-gray-200 transition-colors">Tasks</a></li>
        <li><a href="#" className="hover:text-gray-200 transition-colors">About</a></li>
        <li><a href="#" className="hover:text-gray-200 transition-colors">Contact</a></li>
      </ul>

      {/* Mobile Menu Button (for smaller screens) */}
      <button className="md:hidden bg-pink-500 px-3 py-2 rounded-lg hover:bg-pink-700 transition">
        ☰
      </button>
    </nav>
  );
};

export default Navbar;

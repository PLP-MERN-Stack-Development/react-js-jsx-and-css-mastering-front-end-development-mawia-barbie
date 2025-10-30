import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        {/* Left Section */}
        <p className="text-sm">
          © {new Date().getFullYear()} React Task Manager. All rights reserved.
        </p>

        {/* Right Section */}
        <div className="flex space-x-6">
          <a href="#" className="hover:text-white transition-colors duration-200">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white transition-colors duration-200">
            Terms of Service
          </a>
          <a href="#" className="hover:text-white transition-colors duration-200">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

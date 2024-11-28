import React, { useState } from "react";
import logo from "../assets/logo.svg";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav>
      <div className="flex items-center justify-between px-5 py-5 md:px-10 lg:px-20">

        <div className="cursor-pointer">
          <img src={logo} alt="logo" />
        </div>

        {/* Desktop Navbar Menu */}
        <ul className="hidden md:flex gap-10 font-fontRal font-bold">
          <li className="cursor-pointer hover:text-[#E4B40D]">Home</li>
          <li className="cursor-pointer hover:text-[#E4B40D]">About Us</li>
          <li className="cursor-pointer hover:text-[#E4B40D]">Roadmap</li>
          <li className="cursor-pointer hover:text-[#E4B40D]">FAQs</li>
          <li className="cursor-pointer hover:text-[#E4B40D]">Contact Us</li>
        </ul>


        <button className="hidden md:block px-6 py-3 rounded-full text-black font-semibold bg-gradient-to-r from-[#E4B40D] to-yellow-200 text-[17px] transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:bg-yellow-300">
          Connect Wallet
        </button>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            className="text-[#E4B40D] focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-500 ease-in-out ${
          isMobileMenuOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="py-5 px-5 opacity-100 transition-opacity duration-500 ease-in-out">
          <ul className="space-y-4 font-fontRal font-bold">
            <li className="cursor-pointer hover:text-[#E4B40D]">Home</li>
            <li className="cursor-pointer hover:text-[#E4B40D]">About Us</li>
            <li className="cursor-pointer hover:text-[#E4B40D]">Roadmap</li>
            <li className="cursor-pointer hover:text-[#E4B40D]">FAQs</li>
            <li className="cursor-pointer hover:text-[#E4B40D]">Contact Us</li>
          </ul>
          <button className="w-full mt-5 px-6 py-3 rounded-full text-black font-semibold bg-gradient-to-r from-[#E4B40D] to-yellow-200 text-[17px] transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:bg-yellow-300">
            Connect Wallet
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

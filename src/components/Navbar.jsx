import logo from "../assets/logo.svg";

function Navbar() {
  return (
    <div className="flex items-center font-fontRal font-bold justify-between px-5 py-5 md:px-10 lg:px-20">
      <div className="cursor-pointer">
        <img src={logo} alt="logo" />
      </div>

      {/* Navbar Menu */}
      <ul className="hidden md:flex gap-20">
        <li className="cursor-pointer hover:text-[#E4B40D]">Home</li>
        <li className="cursor-pointer hover:text-[#E4B40D]">About Us</li>
        <li className="cursor-pointer hover:text-[#E4B40D]">Roadmap</li>
        <li className="cursor-pointer hover:text-[#E4B40D]">FAQs</li>
        <li className="cursor-pointer hover:text-[#E4B40D]">Contact Us</li>
      </ul>

      {/* Connect Wallet Button */}
      <button className="px-6 py-3 rounded-full text-black font-semibold bg-gradient-to-r from-[#E4B40D] to-yellow-200 text-[17px] transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:bg-yellow-300">
        Connect Wallet
      </button>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button className="text-[#E4B40D] focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Navbar;

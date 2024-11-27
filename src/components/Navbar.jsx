import logo from "../assets/logo.svg"

function Navbar() {
  return (
    <div className="flex items-center font-fontRal font-bold justify-between px-20 py-5">
      <div className="cursor-pointer">
        <img src={logo} alt="logo" />
      </div>

      <ul className="flex gap-20">
        <li className="cursor-pointer hover:text-[#E4B40D]">Home</li>
        <li className="cursor-pointer hover:text-[#E4B40D]">About Us</li>
        <li className="cursor-pointer hover:text-[#E4B40D]">Roadmap</li>
        <li className="cursor-pointer hover:text-[#E4B40D]">FAQs</li>
        <li className="cursor-pointer hover:text-[#E4B40D]">Contact Us</li>
      </ul>

      <button className="px-6 py-3 rounded-full text-black font-semibold bg-gradient-to-r from-[#E4B40D] to-yellow-200 text-[17px]">
        Connect Wallet
      </button>
    </div>
  );
};
export default Navbar;

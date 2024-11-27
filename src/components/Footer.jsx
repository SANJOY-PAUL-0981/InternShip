import foot from "../assets/foot.svg";

function Footer() {
  return (
    <div className="bg-[#0a1120] p-10 flex flex-col md:flex-row justify-between items-center gap-10 md:gap-0 px-5 md:px-20">
      {/* Logo Section */}
      <div className="flex justify-center">
        <img src={foot} alt="logo" className="w-40 md:w-auto" />
      </div>

      {/* Navigation Links */}
      <ul className="flex flex-col md:flex-row text-lg md:text-xl font-fontRal font-bold gap-5 md:gap-20 text-center">
        <li className="cursor-pointer hover:text-[#E4B40D]">About Us</li>
        <li className="cursor-pointer hover:text-[#E4B40D]">Roadmap</li>
        <li className="cursor-pointer hover:text-[#E4B40D]">FAQs</li>
        <li className="cursor-pointer hover:text-[#E4B40D]">Contact Us</li>
      </ul>

      {/* Contact Us Section */}
      <div className="flex flex-col items-center md:items-start gap-5">
        <p className="font-fontfira font-bold text-2xl md:text-3xl">
          Contact <span className="text-[#E4B40D]">Us</span>
        </p>
        <div className="text-white flex gap-5 text-2xl md:text-3xl">
          <i className="fa-brands fa-telegram duration-200 hover:-translate-y-2 cursor-pointer"></i>
          <i className="fa-brands fa-reddit-alien duration-200 hover:-translate-y-2 cursor-pointer"></i>
          <i className="fa-brands fa-twitter duration-200 hover:-translate-y-2 cursor-pointer"></i>
        </div>
      </div>
    </div>
  );
}

export default Footer;

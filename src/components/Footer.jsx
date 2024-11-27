import foot from "../assets/foot.svg"

function Footer() {
  return (
    <div className="bg-[#0a1120] p-10 flex justify-between items-center px-20">
      <div>
        <img src={foot} alt="logo" />
      </div>
      <ul className="flex text-xl font-fontRal font-bold gap-20">
        <li className="cursor-pointer hover:text-[#E4B40D]">About Us</li>
        <li className="cursor-pointer hover:text-[#E4B40D]">Roadmap</li>
        <li className="cursor-pointer hover:text-[#E4B40D]">FAQs</li>
        <li className="cursor-pointer hover:text-[#E4B40D]">Contact Us</li>
      </ul>
      <div className="flex flex-col gap-5">
        <p className="font-fontfira font-bold text-3xl">Contact <span className="text-[#E4B40D]">Us</span></p>
        <div className="text-white flex justify-center items-center gap-5 text-3xl">
          <i className="fa-brands fa-telegram"></i>
          <i class="fa-brands fa-reddit-alien"></i>
          <i class="fa-brands fa-twitter"></i>
        </div>
      </div>
    </div>
  );
};
export default Footer;

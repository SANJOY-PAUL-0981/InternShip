function Hero() {
  return (
    <div className="flex flex-col gap-10 justify-center h-[100vh] px-5 md:px-10 lg:px-20">

      <div className="flex flex-col gap-4">
        <h1 className="font-fontfira font-bold text-4xl md:text-5xl lg:text-7xl w-full md:w-[70vw] lg:w-[60vw]">
          Trusted Multi-Chain <span className="font-sans text-[#E4B40D] pr-5">DEX</span>platform
        </h1>

        <p className="font-fontfira text-base md:text-lg lg:text-xl text-white/60 font-light">
          Trade, earn, and own crypto on the all-in-one multi-chain DEX
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 md:gap-10 font-fontRal">
        <button className="px-6 py-3 rounded-full text-black font-semibold bg-gradient-to-r from-[#E4B40D] to-yellow-200 text-sm md:text-[17px] transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:bg-yellow-300">
          Connect Wallet
        </button>

        <button className="px-8 py-3 rounded-full text-[#E4B40D] font-semibold border-2 border-[#E4B40D] text-sm md:text-[17px] transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:text-white hover:bg-[#E4B40D]">
          Trade Crypto
        </button>
      </div>

    </div>
  );
};
export default Hero;

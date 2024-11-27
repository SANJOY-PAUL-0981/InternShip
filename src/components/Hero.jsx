function Hero() {
  return (
    <div className="flex flex-col gap-10 justify-center h-[100vh] px-20">

      <div className="flex flex-col gap-4">
        <h1 className="font-fontfira font-bold text-7xl w-[60vw]">
          Trusted Multi-Chain <span className="font-sans text-[#E4B40D] pr-5">DEX</span>platform
        </h1>

        <p className="font-fontfira text-xl text-white/60 font-light">
          Trade, earn, and own crypto on the all-in-one multi-chain DEX
        </p>
      </div>


      <div className="flex gap-10 font-fontRal">
        <button className="px-6 py-3 rounded-full text-black font-semibold bg-gradient-to-r from-[#E4B40D] to-yellow-400 text-[17px]">
          Connect Wallet
        </button>
        <button className="px-8 py-3 rounded-full text-[#E4B40D] font-semibold border-2 border-[#E4B40D] text-[17px]">
          Trade Crypto
        </button>
      </div>

    </div>
  );
};
export default Hero;

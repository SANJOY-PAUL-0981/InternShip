import Dollar from "../assets/Dollar.svg"
import Phone from "../assets/Phone.svg"
import Shield from "../assets/Shield.svg"
import tune from "../assets/tune.svg"

function Features() {
  return (
    <div className="bg-[#0B1221] p-10 ">
      <div className="font-fontfira font-bold text-5xl flex justify-center p-10">
        <h1>Our <span className="text-[#E4B40D]">Features</span></h1>
      </div>

      {/*features*/}
      <div className="flex gap-16 justify-center">

        <div className="border-2 w-[270px] h-[270px] rounded-2xl border-white/5 flex flex-col gap-8 px-5 pt-8 bg-white bg-opacity-[0.02] hover:shadow-[-10px_-10px_20px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] transition-all ease-in-out duration-300">
          <div className="bg-white/10 w-14 h-14 rounded-full flex p-3 justify-center items-center">
            <img src={Dollar} alt="dollar" />
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-xl font-fontRal">
              Cheapest TXs
            </p>
            <p className="font-fontRal text-white/80">
              Exchange popular digital currencies at the cheapest possible transaction price
            </p>
          </div>
        </div>

        <div className="border-2 w-[270px] h-[270px] rounded-2xl border-white/5 flex flex-col gap-8 px-5 pt-8 bg-white bg-opacity-[0.02] hover:shadow-[-10px_-10px_20px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] transition-all ease-in-out duration-300">
          <div className="bg-white/10 w-14 h-14 rounded-full flex p-3 justify-center items-center">
            <img src={Shield} alt="shield" />
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-xl font-fontRal">
              CerTIK
            </p>
            <p className="font-fontRal text-white/80">
              We are Audited by Certik. CertiK is the leading security-focused ranking platform to
            </p>
          </div>
        </div>

        <div className="border-2 w-[270px] h-[270px] rounded-2xl border-white/5 flex flex-col gap-8 px-5 pt-8 bg-white bg-opacity-[0.02] hover:shadow-[-10px_-10px_20px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] transition-all ease-in-out duration-300">

          <div className="bg-white/10 w-14 h-14 rounded-full flex p-3 justify-center items-center">
            <img src={Phone} alt="phone" />
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-xl font-fontRal">
              No Contract Sells
            </p>
            <p className="font-fontRal text-white/80">
              No contract sells to fund the marketing wallets
            </p>
          </div>
        </div>

        <div className="border-2 w-[270px] h-[270px] rounded-2xl border-white/5 flex flex-col gap-8 px-5 pt-8 bg-white bg-opacity-[0.02] hover:shadow-[-10px_-10px_20px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] transition-all ease-in-out duration-300">
          <div className="bg-white/10 w-14 h-14 rounded-full flex p-3 justify-center items-center">
            <img src={tune} alt="tune" />
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-xl font-fontRal">
              CrossDex Support
            </p>
            <p className="font-fontRal text-white/80">
              Exchange popular digital currencies at the cheapest possible transaction price
            </p>
          </div>
        </div>

      </div>

    </div>
  );
};
export default Features;

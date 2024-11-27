import moonx from "../assets/moonx.svg";
import uni from "../assets/uni.svg";
import comp from "../assets/comp.svg";
import tick from "../assets/tick.svg";

function Comparison() {
  return (
    <div className="text-white py-16 bg-[#0B1221] mt-36 bg-[url('./assets/bg.svg')] bg-[length:100%] bg-no-repeat bg-center">
      <div className="flex px-20">
        <h2 className="text-center text-4xl font-bold mb-8 font-fontfira">
          Why <span className="text-yellow-500">MoonEX</span>?
        </h2>
      </div>

      {/* Table */}
      <div className="flex justify-center">
        <table className="border-collapse w-[80vw] text-center bg-opacity-[0.02] bg-transparent bg-white rounded-3xl">
          <thead>
            <tr className="flex justify-between items-center border-b border-white/20 pt-5">
              <th className="flex justify-center items-center w-[26.6vw] border-r h-24 border-white/20">
                <img src={comp} alt="comparision" />
              </th>
              <th className="pt-3 border-r flex justify-center items-center w-[28.6vw] h-24 border-white/20">
                <img src={moonx} alt="logo" />
              </th>
              <th className="flex justify-center items-center w-[26.6vw]">
                <img src={uni} alt="uniswap" />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="flex justify-between items-center border-b border-white/20">
              <td className="font-normal font-fontfira text-white/80 py-5 px-10 border-r border-white/20 flex justify-start items-center w-[26.6vw]">
                1. Point no one
              </td>
              <td className="flex justify-center items-center w-[28.6vw] border-r border-white/20 h-16">
                <img src={tick} alt="tick"/>
              </td>
              <td className="text-xl flex justify-center items-center w-[26.6vw]">❌</td>
            </tr>
            <tr className="flex justify-between items-center border-b border-white/20">
              <td className="font-normal font-fontfira text-white/80 py-5 px-10 border-r border-white/20 flex justify-start items-center w-[26.6vw]">
                2. Point no two this
              </td>
              <td className="flex justify-center items-center w-[28.6vw] border-r border-white/20  h-16">
                <img src={tick} alt="tick"/>
              </td>
              <td className="text-xl flex justify-center items-center w-[26.6vw]">❌</td>
            </tr>
            <tr className="flex justify-between items-center border-b border-white/20">
              <td className="font-normal font-fontfira text-white/80 py-5 px-10 border-r border-white/20 flex justify-start items-center w-[26.6vw]">
                3. Point no two this
              </td>
              <td className="flex justify-center items-center w-[28.6vw] border-r border-white/20  h-16">
                <img src={tick} alt="tick"/>
              </td>
              <td className="text-xl flex justify-center items-center w-[26.6vw]">❌</td>
            </tr>
            <tr className="flex justify-between items-center border-b border-white/20">
              <td className="font-normal font-fontfira text-white/80 py-5 px-10 border-r border-white/20 flex justify-start items-center w-[26.6vw]">
                3. Point no two this
              </td>
              <td className="flex justify-center items-center w-[28.6vw] border-r border-white/20  h-16">
                <img src={tick} alt="tick"/>
              </td>
              <td className="text-xl flex justify-center items-center w-[26.6vw]">❌</td>
            </tr>
            <tr className="flex justify-between items-center">
              <td className="font-normal font-fontfira text-white/80 py-5 px-10 border-r border-white/20 flex justify-start items-center w-[26.6vw]">
                3. Point no two this
              </td>
              <td className="flex justify-center items-center w-[28.6vw] border-r border-white/20  h-16">
                <img src={tick} alt="tick"/>
              </td>
              <td className="text-xl flex justify-center items-center w-[26.6vw]">❌</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Comparison;

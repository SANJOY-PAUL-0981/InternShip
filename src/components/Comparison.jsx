import moon from "../assets/moon.svg"
import x from "../assets/x.svg"
import uni from "../assets/uni.svg"
import comp from "../assets/comp.svg"

function Comparison() {
  return (
    <div className="text-white py-16 bg-[url('./assets/bg.svg')] bg-[#0B1221] mt-36">
      <div className="flex px-20">
        <h2 className="text-center text-4xl font-bold mb-8 font-fontfira">Why <span className="text-yellow-500">MoonEX</span>?</h2>
      </div>

     {/*Table*/}
      <div>
        <table>
          <tr>
            <th>
              <img src={comp} alt="comparision" />
            </th>
            <th>
              <img src={moon} alt="moonx" /><img src={x} alt="moonx logo" />
            </th>
            <th>
              <img src={uni} alt="uniswap" />
            </th>
          </tr>
          <tr>
            <th></th>
            <th></th>
            <th></th>
          </tr>
          <tr>
            <th></th>
            <th></th>
            <th></th>
          </tr>
          <tr>
            <th></th>
            <th></th>
            <th></th>
          </tr>
          <tr>
            <th></th>
            <th></th>
            <th></th>
          </tr>
          <tr>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </table>
      </div>
    </div>
  );
};
export default Comparison;

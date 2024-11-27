function Comparison(){
    return (
      <div className="text-white py-16 bg-[#0B1221] mt-36">
        <h2 className="text-center text-3xl font-bold mb-8">Why <span className="text-yellow-500">MoonEX</span>?</h2>
        <div className="bg-dark rounded-lg p-8 mx-auto max-w-5xl">
          <table className="table-auto w-full text-center">
            <thead>
              <tr className="text-yellow-500">
                <th>Comparison</th>
                <th>MoonEX</th>
                <th>Uniswap</th>
              </tr>
            </thead>
            <tbody>
              {[...Array(5)].map((_, idx) => (
                <tr key={idx} className="border-b border-gray-700">
                  <td>Point no {idx + 1}</td>
                  <td>✅</td>
                  <td>❌</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  export default Comparison;
  
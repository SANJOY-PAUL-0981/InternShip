function Features () {
    const features = [
      { title: "Cheapest TXs", description: "Exchange popular digital currencies at the cheapest possible transaction price." },
      { title: "CertiK", description: "We are audited by CertiK, the leading security-focused ranking platform." },
      { title: "No Contract Sells", description: "No contract sells to fund the marketing wallets." },
      { title: "CrossDex Support", description: "Support for exchanging across multiple chains." },
    ];
  
    return (
      <div className="py-16 text-white">
        <h2 className="text-center text-3xl font-bold mb-8">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-dark p-6 rounded-lg">
              <h3 className="text-yellow-500 font-bold">{feature.title}</h3>
              <p className="mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  export default Features;
  
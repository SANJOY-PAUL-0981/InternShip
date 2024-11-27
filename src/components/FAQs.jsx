import { useState } from "react";

function FAQs() {
  const [open, setOpen] = useState(null);
  const faqs = [
    { question: "How do I get a Referral Code?", answer: "Answer 1" },
    { question: "Do I get rewarded in tokens or ETH when I refer buyers?", answer: "Answer 2" },
    { question: "How do I get a Referral Code?", answer: "Answer 3" },
  ];

  return (
    <div className="py-16 text-white bg-[#0B1221] flex justify-center bg-[url('./assets/bg.svg')] bg-[length:100%] bg-no-repeat bg-left">
      <div className="bg-white bg-opacity-[0.03] p-10 rounded-xl w-[60vw]">
        <h2 className="text-center text-4xl font-bold mb-8 font-fontfira text-[#E4B40D]">FAQs</h2>
        <div className="max-w-3xl mx-auto font-fontRal text-xl">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b border-gray-700 py-4">
              <div
                onClick={() => setOpen(open === idx ? null : idx)}
                className="flex justify-between cursor-pointer"
              >
                <h3>{faq.question}</h3>
                <span className="text-4xl">{open === idx ? "-" : "+"}</span>
              </div>
              <div
                className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
                  open === idx ? "max-h-40" : "max-h-0"
                }`}
              >
                <p className="mt-2">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQs;

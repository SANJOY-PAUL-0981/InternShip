import { useState } from "react";

function FAQs() {
  const [open, setOpen] = useState(null);
  const faqs = [
    { question: "How do I get a Referral Code?", answer: "You can get it by signing up and sharing the link with your friends." },
    { question: "Do I get rewarded in tokens or ETH?", answer: "You receive rewards in ETH instantly after referrals make a transaction." },
  ];

  return (
    <div className="py-16 text-white">
      <h2 className="text-center text-3xl font-bold mb-8">FAQs</h2>
      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, idx) => (
          <div key={idx} className="border-b border-gray-700 py-4">
            <div
              onClick={() => setOpen(open === idx ? null : idx)}
              className="flex justify-between cursor-pointer"
            >
              <h3>{faq.question}</h3>
              <span>{open === idx ? "-" : "+"}</span>
            </div>
            {open === idx && <p className="mt-2">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};
export default FAQs;

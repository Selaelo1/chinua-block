/* eslint-disable react-refresh/only-export-components */
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is ChanuaBlock?",
    answer:
      "ChanuaBlock is a blockchain-powered investment platform that democratizes access to global investment opportunities for African investors. Our platform allows you to invest in various assets with as little as $50.",
  },
  {
    question: "How do I start investing?",
    answer:
      "Getting started is easy! Simply create an account, complete the verification process, fund your wallet, and choose from our curated investment opportunities. Our platform guides you through each step of the process.",
  },
  {
    question: "Is my investment secure?",
    answer:
      "Yes, your investments are secured through blockchain technology and strong encryption. We also implement strict security measures and regulatory compliance to protect your assets and personal information.",
  },
  {
    question: "What are the minimum investment amounts?",
    answer:
      "Our minimum investment amount starts at $50, making it accessible for most investors. Different opportunities may have varying minimum investment requirements, which are clearly displayed on each investment listing.",
  },
  {
    question: "How can I withdraw my investments?",
    answer:
      "You can request withdrawals through your dashboard at any time. The processing time depends on the type of investment and liquidity terms, which are specified in each investment's details.",
  },
  {
    question: "What types of investments are available?",
    answer:
      "We offer a diverse range of investment opportunities including real estate, renewable energy projects, agriculture, and technology ventures across Africa. Each opportunity is carefully vetted by our team.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      id="faq"
      className="min-h-screen flex items-center py-16 bg-gradient-to-b from-white to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-blue-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Everything you need to know about investing with ChanuaBlock
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="mb-4 overflow-hidden rounded-lg bg-white shadow-md transition-all duration-200 hover:shadow-lg"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none"
              >
                <span className="text-lg font-medium text-blue-900">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 text-blue-600 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-4 text-gray-600">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600">
            Still have questions?{" "}
            <a
              href="mailto:support@chanuablock.com"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Contact our support team
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;

import React, { useState } from "react";
import patient from "../images/patient.png";
import { Link } from "react-router-dom";

function Landingpage() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Spend-Wise?",
      answer:
        "Spend-Wise is a tool to help you track your expenses and manage your budget effectively.",
    },
    {
      question: "Is Spend-Wise free to use?",
      answer: "Yes, Spend-Wise offers free features to track and manage your finances.",
    },
    {
      question: "Can I customize my expense categories?",
      answer: "Absolutely! Spend-Wise allows you to create and customize your expense categories.",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center p-6 md:p-12 lg:p-20">
        <div className="flex justify-center">
          <img
            src={patient}
            alt="Spend-Wise"
            className="h-auto max-w-full w-[500px] md:w-[500px]"
          />
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6">
          Your Health, Your Data, Fully Protected.
          </h1>
          <Link to={"/patientdata"}>
          <button
            type="button"
            className="text-gray-900 bg-[#388ef7] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-xl px-6 py-3 inline-flex items-center"
          >
            Enter patient data 
          </button>
          </Link>
        </div>
      </div>

      {/* Accordion Section
      <section className="bg-gray-100 py-10 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          FAQs
        </h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full text-left flex justify-between items-center p-4 text-base md:text-lg font-medium bg-gray-200 hover:bg-gray-300"
              >
                {faq.question}
                <span>
                  {activeIndex === index ? (
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M18 12H6"
                      ></path>
                    </svg>
                  ) : (
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v12m6-6H6"
                      ></path>
                    </svg>
                  )}
                </span>
              </button>
              {activeIndex === index && (
                <div className="p-4 bg-white text-gray-700">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </section> */}
    </main>
  );
}

export default Landingpage;

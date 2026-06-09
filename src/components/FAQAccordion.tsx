"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Who can join IEEE?",
    answer:
      "Any student or professional interested in technology and engineering can join IEEE. Student membership is available to undergraduate and graduate students enrolled at least half-time in an accredited institution.",
  },
  {
    question:
      "What's the difference between IEEE and Computer Society membership?",
    answer:
      "IEEE membership provides access to the broader technology community, while Computer Society membership focuses specifically on computing and includes additional computing-related resources, publications, and events. Computer Society membership includes IEEE membership.",
  },
  {
    question: "How do I join your student branch chapter?",
    answer:
      "First, become an IEEE or IEEE Computer Society member through the official IEEE website. Then, contact us through our website or attend one of our events to register with our local chapter. We'll guide you through the process!",
  },
  {
    question: "Is there a fee to join the student branch chapter?",
    answer:
      "Once you have IEEE membership, joining our student branch chapter is typically free. You just need to be an active IEEE member and enrolled at our institution.",
  },
  {
    question: "What benefits do I get from the student branch?",
    answer:
      "Access to exclusive workshops, technical seminars, networking events, hackathons, project guidance, career mentorship, leadership opportunities, and a community of like-minded peers passionate about technology.",
  },
];

export function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {FAQ_ITEMS.map((item, index) => (
        <div key={index} className="cs-card">
          <button
            type="button"
            onClick={() => toggle(index)}
            className="w-full flex items-center justify-between p-6 text-left focus-visible:outline-2 focus-visible:outline-[#FFA300] focus-visible:outline-offset-2"
            aria-expanded={openIndex === index}
            aria-controls={`faq-answer-${index}`}
          >
            <h3 className="text-xl font-bold text-gray-900 pr-4">
              {item.question}
            </h3>
            <ChevronDown
              className={`w-5 h-5 text-[#00629B] flex-shrink-0 transition-transform duration-200 ${openIndex === index ? "rotate-180" : ""}`}
              aria-hidden="true"
            />
          </button>
          <div
            id={`faq-answer-${index}`}
            role="region"
            aria-labelledby={`faq-question-${index}`}
            className={`overflow-hidden transition-all duration-200 ease-in-out ${openIndex === index ? "max-h-96" : "max-h-0"}`}
          >
            <div className="px-6 pb-6">
              <p className="text-gray-700 leading-relaxed">{item.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

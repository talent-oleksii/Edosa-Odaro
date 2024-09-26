import React, { FC, useState } from "react";
import FAQCard from "../../components/FAQCard";
import "../../assets/css/FAQ.css";

interface FAQItem {
  question: string;
  answer: string;
  open: boolean;
}

const FAQ: FC = () => {
  const [faqs, setFaqs] = useState<FAQItem[]>([
    {
      question: "How many programmers does it take to screw a lightbulb?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra lorem eu dolor rhoncus, at scelerisque ligula gravida. Sed porta id mi sit amet convallis. Etiam iaculis massa sit amet lacus blandit sodales. Nulla ultrices velit a diam placerat congue. Pellentesque iaculis, ipsum quis eleifend dapibus, est dui eleifend ante, quis fermentum mi ligula quis nisl. Ut et ex dui. Integer id venenatis quam.",
      open: true
    },
    {
      question: "Who is the most awesome person?",
      answer: "You! The viewer!",
      open: false
    },
    {
      question:
        "How many questions does it take to makes a succesful FAQ Page?",
      answer: "This many!",
      open: false
    }
  ]);
  const toggleFAQ = (index: number): void => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };

  return (
    <div className="mt-4 sm:mt-14 px-4 sm:px-10 flex justify-center items-center flex-col">
      <div>
        <span className="text-base sm:text-2xl leading-8 font-bold rounded-full bg-[#F5F5F5] px-3 sm:px-5 py-1">FAQ</span>
      </div>
      <div className="text-lg sm:text-4xl leading-11 font-bold mt-4 sm:mt-8 text-text-color">
        Frequently asked questions
      </div>
      <div className="lg:w-8/12 w-full mx-10 sm:mx-64">
        <div>
          <div className="faqs">
            {faqs.map((faq, index) => (
              <FAQCard faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;

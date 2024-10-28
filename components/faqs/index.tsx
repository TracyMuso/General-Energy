import { useState } from "react";
import Image from "next/image";
import questions from "./questions";

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleOpenAnswer = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      <div className="text-center">
        <div className="w-4/5 mx-auto">
          <h2 className="md:text-3xl pb-8 max-[640px]:text-2xl lg:text-4xl font-extrabold">
            Frequently Asked Questions
          </h2>
        </div>
      </div>
      <ul className="px-2 md:px-0 space-y-5">
        {questions.map((question, index) => (
          <li
            key={question.question}
            className={`${
              activeIndex === index ? "bg-yellow-100" : "bg-transparent"
            } hover:bg-yellow-100 rounded-lg cursor-pointer p-4`}
            onClick={() => handleOpenAnswer(index)}
          >
            <div className="flex justify-between items-center">
              <p className="text-base md:text-xl font-medium max-[500px]:text-m">
                {question.question}
              </p>
              <div
                className={
                  activeIndex === index
                    ? "rotate-180 duration-300"
                    : "duration-300"
                }
              >
                <Image src={'/icons/arrow-down-svgrepo-com.svg'} width={40} height={40} alt="arrow down icon" />
              </div>
            </div>

            {activeIndex === index ? (
              <div className="transition ease-in-out delay-150">
                <p className="mt-2">{question.answer}</p>
              </div>
            ) : null}
          </li>
        ))}
      </ul>
    </>
  );
};

export default FAQs;
import { useState } from "react";
import questions from "../data/questions.json";
import Button from "./Button";

import { FaAngleDoubleLeft } from "react-icons/fa";
import { FaAngleDoubleRight } from "react-icons/fa";
import { IoCheckmarkDoneCircle } from "react-icons/io5";

const Questions = ({ getScore, setShowResult }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  // console.log("score", score);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [currentAnswer, setCurrentAnswer] = useState(null);
  // console.log("selectedAnswers", selectedAnswers)
  // console.log("currentAnswer",currentAnswer);

  const [submitButton, setSubmitButton] = useState(false);

  const handleOptionClick = (option) => {
    const correctAnswer = questions[currentIndex].answer;

    setCurrentAnswer(option);

    setSelectedAnswers((selectedAnswer) => {
      const alreadyAnswered = selectedAnswer[currentIndex];
      const isPreviouslyCorrect = alreadyAnswered === correctAnswer;
      const isNowCorrect = option === correctAnswer;

      // Score logic based on change
      if (!isPreviouslyCorrect && isNowCorrect) {
        setScore((prevScore) => prevScore + 1);
      } else if (isPreviouslyCorrect && !isNowCorrect) {
        setScore((prevScore) => prevScore - 1);
      }

      return { ...selectedAnswer, [currentIndex]: option };
    });
  };

  const prevQuestion = () => {
    if (currentIndex === 0) {
      return;
    }
    setCurrentIndex((prevIndex) => prevIndex - 1);
    setSubmitButton(false);
    setCurrentAnswer(null);
  };
  const nextQuestion = () => {
    if (currentIndex === questions.length - 1) {
      setSubmitButton(true);
      return;
    }
    setCurrentIndex((prevIndex) => prevIndex + 1);
    setCurrentAnswer(null);
  };

  return (
    <>
      <span className=" inline-block mb-2">
        Questions : {currentIndex + 1}/{questions.length}
      </span>
      <h2 className="text-2xl bg-gray-900 border-2 p-2 rounded-md">
        {questions[currentIndex].question}
      </h2>
      <div className="flex flex-col mt-4">
        {questions[currentIndex].options.map((option, idx) => (
          <button
            key={idx}
            onClick={() => handleOptionClick(option, idx)}
            className={`bg-[#1E293B] m-1 p-3 rounded-md hover:bg-gray-900 hover:outline-1 cursor-pointer flex justify-between items-center`}
          >
            <span>{idx + 1}</span>
            <span>{option}</span>
            <span className=" bg-green-600 rounded-full ">
              <IoCheckmarkDoneCircle
                size={20}
                className={` ${
                  currentAnswer === option ? "block " : "hidden "
                } `}
              />
            </span>
          </button>
        ))}
      </div>

      <div className="flex justify-between mt-4">
        <Button
          style="#EF4444"
          showQuestion={prevQuestion}
          icon={<FaAngleDoubleLeft />}
        >
          Previous
        </Button>
        <Button
          style="#22C55E"
          showQuestion={nextQuestion}
          icon={<FaAngleDoubleRight />}
        >
          Next
        </Button>
      </div>

      {submitButton && (
        <button
          className="px-3 py-2 w-[100px] bg-[#10B981] rounded-xl  hover:scale-110 transform-gpu transition-all duration-200 cursor-pointer  "
          onClick={() => {
            if (confirm("Are you sure you want to submit?")) {
              getScore(score);
              setShowResult(false);
            }
          }}
        >
          Submit
        </button>
      )}
    </>
  );
};

export default Questions;

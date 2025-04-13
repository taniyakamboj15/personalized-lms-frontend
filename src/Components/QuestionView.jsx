// components/QuestionView.jsx
import React, { useState } from "react";

export const QuestionView = ({
  question,
  questionNumber,
  totalQuestions,
  selectedOption,
  isCorrect,
  onAnswer,
  onNext,
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleAnswer = async (optionIndex) => {
    if (selectedOption !== null) return;

    setIsSubmitting(true);
    try {
      await onAnswer(optionIndex, question);
    } finally {
      setIsSubmitting(false);
    }
  };
  if (!question) {
    return (
      <div className='max-w-2xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg'>
        <p className='text-red-500'>Question data is not available</p>
      </div>
    );
  }
  return (
    <div className='max-w-2xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg'>
      <div className='flex justify-between items-center mb-6'>
        <h3 className='text-xl font-semibold text-gray-700'>
          Question {questionNumber}/{totalQuestions}
        </h3>
      </div>

      <p className='text-lg font-medium mb-6'>{question.questionText}</p>

      <div className='space-y-3 mb-8'>
        {question.options.map((option, index) => {
          let buttonClass = "w-full text-left p-4 rounded-lg border";

          if (selectedOption !== null) {
            if (index === question.correctAnswer) {
              buttonClass += " bg-green-100 border-green-300";
            } else if (index === selectedOption && !isCorrect) {
              buttonClass += " bg-red-100 border-red-300";
            } else {
              buttonClass += " bg-gray-50 border-gray-200";
            }
          } else {
            buttonClass += " bg-white border-gray-200 hover:bg-gray-50";
          }

          return (
            <button
              key={index}
              className={buttonClass}
              onClick={() => handleAnswer(index)}
              disabled={selectedOption !== null || isSubmitting}
            >
              {option}
            </button>
          );
        })}
      </div>

      {selectedOption !== null && (
        <div className='flex justify-end'>
          <button
            onClick={onNext}
            className='px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors'
            disabled={isSubmitting}
          >
            {questionNumber === totalQuestions ? "Next Topic" : "Next Question"}
          </button>
        </div>
      )}
    </div>
  );
};

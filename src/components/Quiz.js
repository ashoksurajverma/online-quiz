import React, { useState } from "react";
import Question from "./Question";
import Button from "react-bootstrap/esm/Button";

function Quiz({ subject, onHandleBack }) {
  const [questionsCollection] = useState(subject);
  const [score, setScore] = useState(0);
  const [results, setResults] = useState({});
  const [isSubmit, setIsSubmmit] = useState(false);

  const onHandleChange = (value, question) => {
    const isCorrect = question.ans.toLowerCase() === value.toLowerCase();
    setResults({ ...results, [question.id]: isCorrect });
  };

  const handleSubmit = () => {
    setIsSubmmit(true);
    calculateScore();
  };

  const calculateScore = () => {
    const allCorrectAns = Object.values(results);
    let count = 0;
    allCorrectAns.map((ans) => {
      if (ans) {
        count++;
      }
    });

    setScore(count);
  };

  return (
    <>
      <h2 className="subject-head">{questionsCollection?.subject}</h2>

      {!isSubmit && (
        <>
          <div>
            {questionsCollection?.questions.map((question, index) => {
              return (
                <Question
                  question={question}
                  onHandleChange={onHandleChange}
                  index={index + 1}
                />
              );
            })}
          </div>
          <div className="sub-btn-wrapper">
            <Button onClick={handleSubmit}>Submit</Button>
          </div>
        </>
      )}

      {isSubmit && (
        <div>
          <h3>Your Score: </h3>
          <div>Score: {score}</div>
          <div className="back-btn">
            <Button onClick={onHandleBack}>Back</Button>
          </div>
        </div>
      )}
    </>
  );
}

export default Quiz;

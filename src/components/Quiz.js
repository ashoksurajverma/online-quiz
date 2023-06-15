import React, { useState } from "react";
import { array } from "../dummy";
import Question from "./Question";
import Button from "react-bootstrap/esm/Button";

function Quiz({ subject, onHandleBack }) {
  const [questionsCollection, setData] = useState(subject);
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
      <h2>{questionsCollection?.subject}</h2>

      {!isSubmit && (
        <div>
          {questionsCollection?.questions.map((question) => {
            return (
              <Question question={question} onHandleChange={onHandleChange} />
            );
          })}

          <button onClick={handleSubmit}>Submit</button>
        </div>
      )}
      {isSubmit && (
        <div>
          <h3>Your Score: </h3>
          <div>Score: {score}</div>
          <Button onClick={onHandleBack}>Back</Button>
        </div>
      )}
    </>
  );
}

export default Quiz;

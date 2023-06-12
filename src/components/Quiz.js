import React, { useState } from "react";
import { array } from "../dummy";
import Question from "./Question";

function Quiz() {
  const [questionsCollection, setData] = useState(array);
  const [score, setScore] = useState(0);
  const [results, setResults] = useState({});
  const [isSubmit, setIsSubmmit] = useState(false);

  const onHandleChange = (value, question) => {
    console.log("============== question =========", question);
    console.log("============ event ========", value);
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

  console.log("========= RESULTS ===================", results);

  return (
    <>
      {!isSubmit && (
        <div>
          {questionsCollection.map((question) => {
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
        </div>
      )}
    </>
  );
}

export default Quiz;

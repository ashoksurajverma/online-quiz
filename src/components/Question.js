import React from "react";

function Question({ question, onHandleChange }) {
  return (
    <div>
      <h3>{question.question}</h3>
      <ul>
        {question.options.map((option) => {
          return (
            <div>
              <input
                type="radio"
                id={question.id}
                name={question.id}
                value={option}
                onChange={(e) => onHandleChange(option, question)}
              />
              <label for="html">{option}</label>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default Question;
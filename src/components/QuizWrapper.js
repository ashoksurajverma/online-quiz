import React, { useState } from "react";
import { array } from "../dummy";
import Quiz from "./Quiz";

const RenderSubjects = ({ subjects, onHandleSelectSubject }) => {
  return (
    <>
      <h3>Please Choose the subjects: </h3>
      {subjects.map((subject) => {
        return (
          <div onClick={() => onHandleSelectSubject(subject)}>
            {subject?.subject}
          </div>
        );
      })}
    </>
  );
};

function QuizWrapper() {
  const [subjectWiseQuestions] = useState(array);
  const [selectedSubject, setSelectedSubject] = useState({});

  const onHandleSelectSubject = (subject) => {
    setSelectedSubject(subject);
  };
  console.log(
    "========== selectedSubject ===========",
    selectedSubject,
    Object.keys(selectedSubject).length !== 0
  );
  return (
    <>
      <RenderSubjects
        subjects={subjectWiseQuestions}
        onHandleSelectSubject={onHandleSelectSubject}
      />
      <div>
        {/* {subjectWiseQuestions.map((subject) => {
          return <Quiz subject={subject} />;
        })} */}
        {Object.keys(selectedSubject).length !== 0 && (
          <Quiz subject={selectedSubject} />
        )}
      </div>
    </>
  );
}

export default QuizWrapper;

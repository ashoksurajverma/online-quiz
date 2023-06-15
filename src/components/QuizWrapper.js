import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { array } from "../dummy";
import Quiz from "./Quiz";

const RenderSubjects = ({ subjects, onHandleSelectSubject }) => {
  return (
    <Row>
      <Col>
        {/* <div className="question">

        </div> */}
        <h3>Please Choose the subjects: </h3>
        {subjects.map((subject) => {
          return (
            <div
              className="question"
              onClick={() => onHandleSelectSubject(subject)}
            >
              {subject?.subject}
            </div>
          );
        })}
      </Col>
    </Row>
  );
};

function QuizWrapper() {
  const [subjectWiseQuestions] = useState(array);
  const [selectedSubject, setSelectedSubject] = useState({});

  const onHandleSelectSubject = (subject) => {
    setSelectedSubject(subject);
  };

  const back = () => {
    setSelectedSubject({});
  };

  return (
    <Container className="root-container">
      {Object.keys(selectedSubject).length === 0 && (
        <RenderSubjects
          subjects={subjectWiseQuestions}
          onHandleSelectSubject={onHandleSelectSubject}
        />
      )}

      {Object.keys(selectedSubject).length !== 0 && (
        <div>
          <Quiz subject={selectedSubject} onHandleBack={back} />
        </div>
      )}
    </Container>
  );
}

export default QuizWrapper;

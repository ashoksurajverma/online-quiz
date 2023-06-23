import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React, { useState } from "react";
import Category from "./Category";

function Dashboard() {
  const ideas = [
    { name: "Business", options: [{ name: "sds" }] },
    { name: "Online language Learning", options: [{ name: "sds" }] },
    { name: "Online Market for handmade goods", options: [{ name: "sds" }] },
    {
      name: "Peer to peer car sharing",
      options: [
        { name: "Research Or Planning" },
        { name: "Platform Development" },
        { name: "Establish, Legal and insurance framework" },
        { name: "Users The Car PArticular time" },
        { name: "The car  rent is deposited in your account by user" },
      ],
    },
    { name: "Virtual Reality Fitness club", options: [{ name: "sds" }] },
  ];
  const [selectedIdea, setSelectedIdea] = useState({});

  const onHandleClick = (idea) => {
    setSelectedIdea(idea);
  };
  const goBack = () => {
    setSelectedIdea({});
  };
  console.log("=============== selectedIdea =============", selectedIdea);
  return (
    <Container>
      <Row>
        <Col>
          {Object.keys(selectedIdea).length === 0 && (
            <div className="root-container">
              {ideas.map((idea) => {
                return (
                  <div className="idea" onClick={() => onHandleClick(idea)}>
                    {idea.name}
                  </div>
                );
              })}
            </div>
          )}
          {Object.keys(selectedIdea).length > 0 && (
            <Category
              data={selectedIdea.options}
              heading={selectedIdea?.name}
              goBack={goBack}
            />
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;

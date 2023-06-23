import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

function Thanks() {
  const navigate = useNavigate();

  return (
    <Container>
      <Row>
        <Col>
          <div className="thanks">
            <h3>Thank you for visiting !!!</h3>
            <Button onClick={() => navigate("/dashboard")}>
              Go to Dashboard
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Thanks;

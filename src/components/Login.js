import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function SignIn() {
  return (
    <Container class="container">
      <Row>
        <Col>
          <div className="form-wrapper">
            <h2>Login Form</h2>
            <Form>
              <div className="form-element">
                <Form.Label htmlFor="inputPassword5">Mobile Number</Form.Label>
                <Form.Control type="text" aria-describedby="mobile number" />
              </div>
              <Button variant="primary">Submit</Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default SignIn;

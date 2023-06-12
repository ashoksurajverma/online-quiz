import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Signup() {
  return (
    <Container class="container">
      <Row>
        <Col>
          <div className="form-wrapper">
            <h2>Signup Form</h2>
            <Form>
              <div className="form-element">
                <Form.Label htmlFor="inputPassword5">Name</Form.Label>
                <Form.Control type="text" name="name" />
              </div>
              <div className="form-element">
                <Form.Label htmlFor="inputPassword5">Email</Form.Label>
                <Form.Control type="text" name="email" />
              </div>
              <div className="form-element">
                <Form.Label htmlFor="inputPassword5">Password</Form.Label>
                <Form.Control type="password" name="name" />
              </div>

              <Button variant="primary">Submit</Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Signup;

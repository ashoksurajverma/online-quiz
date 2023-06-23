import Container from "react-bootstrap/Container";
import find from "lodash/find";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function SignIn() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const onHandleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const onHandleSubmit = () => {
    if (formData.email === "" || formData.password === "") {
      return null;
    }

    let users = JSON.parse(localStorage.getItem("users"));
    if (!users) {
      alert("No user found, Please Sign up before login");
      navigate("/signup");
      return;
    }
    const user = find(users, { email: formData.email });

    if (user?.password === formData?.password) {
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/dashboard");
    } else {
      alert(`Invalid email and password`);
    }
  };
  return (
    <Container class="container">
      <Row>
        <Col>
          <div className="form-wrapper">
            <h2>Login Form</h2>
            <Form>
              <div className="form-element">
                <Form.Label htmlFor="inputPassword5">Email</Form.Label>
                <Form.Control
                  type="text"
                  aria-describedby="email"
                  name="email"
                  onChange={onHandleChange}
                />
              </div>
              <div className="form-element">
                <Form.Label htmlFor="inputPassword5">Password</Form.Label>
                <Form.Control
                  type="password"
                  aria-describedby="password"
                  name="password"
                  onChange={onHandleChange}
                />
              </div>
              <Button variant="primary" onClick={onHandleSubmit}>
                Submit
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default SignIn;

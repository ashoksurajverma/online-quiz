import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";
import find from "lodash/find";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onHandleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const onHandleSubmit = () => {
    if (
      formData.name === "" ||
      formData.email === "" ||
      formData.password === ""
    ) {
      return null;
    }

    let users = JSON.parse(localStorage.getItem("users"));
    const user = find(users, { email: formData.email });

    if (user) {
      alert(`User is exit with this email ID`);
      return;
    }
    if (!users) {
      users = [];
    }
    users.push(formData);
    const strData = JSON.stringify(users);
    localStorage.setItem("users", strData);
    navigate("/");
  };
  console.log("============ formsData =========", formData);
  return (
    <Container class="container">
      <Row>
        <Col>
          <div className="form-wrapper">
            <h2>Signup Form</h2>
            <Form>
              <div className="form-element">
                <Form.Label htmlFor="inputPassword5">Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  onChange={onHandleChange}
                  required
                />
              </div>
              <div className="form-element">
                <Form.Label htmlFor="inputPassword5">Email</Form.Label>
                <Form.Control
                  type="text"
                  name="email"
                  onChange={onHandleChange}
                  required
                />
              </div>
              <div className="form-element">
                <Form.Label htmlFor="inputPassword5">Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  onChange={onHandleChange}
                  required
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

export default Signup;

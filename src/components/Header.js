import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">My App</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/signup" className="links">
              Signup
            </Link>
            <Link to="/signin" className="links">
              Signin
            </Link>
            <Link to="/quiz" className="links">
              Quiz
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;

import Container from "react-bootstrap/Container";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/esm/Button";

const BeforeLogin = () => {
  return (
    <>
      <Link to="/signup" className="links">
        Signup
      </Link>
      <Link to="/" className="links">
        Signin
      </Link>
    </>
  );
};

const AfterLogin = () => {
  const navigate = useNavigate();

  const onHandleLogout = () => {
    localStorage.setItem("user", null);
    navigate("/");
  };

  return (
    <>
      <Link to="/quiz" className="links">
        Quiz
      </Link>
      <Button onClick={onHandleLogout}>Logout</Button>
    </>
  );
};

function ColorSchemesExample({ currentUser }) {
  const [user, setUser] = useState(currentUser);
  const location = useLocation();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setUser(user);
  }, [user, location]);
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">My App</Navbar.Brand>
          <Nav>
            {user === null && <BeforeLogin />}
            {user !== null && <AfterLogin />}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;

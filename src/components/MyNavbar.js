import { Nav, Navbar, Container } from "react-bootstrap";
import "../static/Navbar.css";
import { Link } from "react-router-dom";
import logo from "../assets/index.svg";

function MyNavbar(props) {
  return (
    <Navbar collapseOnSelect bg="navbar">
      <Container>
        <Navbar.Brand as={Link} className="nav-brand" to="/WeScribe-Frontend/">
          <img className="navbar_logo" src={logo} />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link
              key="1"
              as={Link}
              className="nav-link"
              to="/WeScribe-Frontend/register"
            >
              <span>Register</span>
            </Nav.Link>
            ,
            <Nav.Link
              key="2"
              as={Link}
              className="nav-link"
              to="/WeScribe-Frontend/login"
            >
              <span>Login</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;

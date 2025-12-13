import {Button, Container, Navbar} from "react-bootstrap";
import {Link} from "@tanstack/react-router";

export default function TopNavBar() {
  return (
    <Navbar bg="primary" data-bs-theme="dark">
      <Container>
        <Link to="/" style={{textDecoration: "none"}}>
          <Navbar.Brand>AV Shop</Navbar.Brand>
        </Link>
        <Navbar.Collapse className="justify-content-end">
          <Button variant="light">Login</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}



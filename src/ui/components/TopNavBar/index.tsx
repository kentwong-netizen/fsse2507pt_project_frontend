import {Link} from "@tanstack/react-router";
import {Button, Container, Navbar, Spinner} from "react-bootstrap";
import {useContext} from "react";
import {LoginUserContext} from "../../../context/LoginUserContext.tsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
import {signOut} from "../../../authService/FirebaseAuthService.ts";


export default function TopNavBar() {

  const loginUser = useContext(LoginUserContext);

  const renderLoginContainer = () => {
    if(loginUser){
      return(
        <>
          <div className="text-white me-2">
            {loginUser.email}
          </div>

          <Link to={"/shoppingcart"}>
            <Button variant="success" className="me-1">
              <FontAwesomeIcon icon={faCartShopping} style={{color: "#ffffff",}} />
            </Button>
          </Link>

          <Button variant= "danger" onClick={signOut}>
            Logout
          </Button>
        </>
      )
    } else if (loginUser === null){
      return (
        <Link to="/login">
          <Button variant="light">
            Login
          </Button>
        </Link>
      )
    } else {
      return <Spinner/>
    }
  }


  return (
    <Navbar bg="primary" data-bs-theme="dark" className="Mb=3">
      <Container>
        <Link to="/" style={{textDecoration: "none"}}>
          <Navbar.Brand>Toy Shop</Navbar.Brand>
        </Link>
        <Navbar.Collapse className="justify-content-end">
          {renderLoginContainer()}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}



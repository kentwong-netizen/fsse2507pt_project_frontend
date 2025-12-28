import TopNavBar from "../../components/TopNavBar";
import {Alert, Button, Container, Form} from "react-bootstrap";
import {type FormEvent, useState} from "react";
import {signInWithEmailAndPassword} from "../../../authService/FirebaseAuthService.ts";
import {useRouter} from "@tanstack/react-router";

export default function LoginPage() {

  const router = useRouter();
  const [isLoginFailed, setisLoginFailed] = useState(false);

  const handleLoginWithEmailAndPswd = async (event:FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const target = event.target as typeof event.target & {
      email:{value: string};
      password:{value: string};
    };

    const email = target.email.value;
    const password = target.password.value;

    const loginResult = await signInWithEmailAndPassword(email, password);

    if(loginResult){
      router.history.back();
    } else {
        setisLoginFailed(true);
    }

    // console.log(email);
    // console.log(password);
  }

  return(
    <>
      <TopNavBar/>
      <Container>
        <Form onSubmit={handleLoginWithEmailAndPswd}>

          {
            isLoginFailed &&
            <Alert variant="danger"> Incorrect email or password </Alert>
          }


          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" placeholder="Password" />
          </Form.Group>

          <Button className="w-100" variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </>
  )
}
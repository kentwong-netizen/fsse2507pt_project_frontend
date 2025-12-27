import TopNavBar from "../../components/TopNavBar";
import {Button, Container, Form} from "react-bootstrap";
import type {FormEvent} from "react";

export default function LoginPage() {

  const handleLoginWithEmailAndPswd = (event:FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const target = event.target as typeof event.target & {
      email:{value: string};
      password:{value: string};
    };

    const email = target.email.value;
    const password = target.password.value;

    console.log(email);
    console.log(password);
  }

  return(
    <>
      <TopNavBar/>
      <Container>
        <Form onSubmit={handleLoginWithEmailAndPswd}>
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
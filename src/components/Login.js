import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Login.css";

function Login() {
  const [formValues, setFormValues] = useState({ email: "em", password: "ps" });
  const [validationStates, setValidationStates] = useState({
    emailState: true,
    passwordState: true,
  });
  const handleEmailChange = (e) => {
    setFormValues({ ...formValues, email: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setFormValues({ ...formValues, password: e.target.value });
  };

  const handleClick = () => {};

  const validate = ({ email, password }) => {
    if (password.length < 8) {
      console.log("No");
    }
    if (
      !String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) {
      console.log("No");
    }
  };

  return (
    <div className="login-container">
      <div className="login-filter">
        <div className="login-modal">
          <h1>Log in</h1>

          <Form>
            <Form.Group className="mb-6" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                onChange={handleEmailChange}
                value={formValues.email}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                onChange={handlePasswordChange}
                value={formValues.password}
              />
            </Form.Group>

            <Button variant="primary" onClick={handleClick}>
              Log in
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Login;

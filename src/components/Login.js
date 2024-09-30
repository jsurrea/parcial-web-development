import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { FormattedMessage, useIntl } from "react-intl";
import "./Login.css";

function Login() {
  const [formValues, setFormValues] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const intl = useIntl();

  const handleEmailChange = (e) => {
    setFormValues({ ...formValues, email: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setFormValues({ ...formValues, password: e.target.value });
  };

  const handleClick = () => {
    navigate("/home");
  };

  const validate = ({ email, password }) => {
    const errors = {};
    if (password.length < 8) {
      errors.password = intl.formatMessage({ id: "login.password.error" });
    }
    if (
      !String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) {
      errors.email = intl.formatMessage({ id: "login.email.error" });
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  useEffect(() => {
    validate(formValues);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formValues]);

  return (
    <div className="login-container">
      <div className="login-filter">
        <div className="login-modal">
          <h1>
            <FormattedMessage id="login.title" />
          </h1>

          <Form>
            <Form.Group className="mb-6" controlId="formBasicEmail">
              <Form.Label>
                <FormattedMessage id="login.email" />
              </Form.Label>
              <Form.Control
                type="email"
                onChange={handleEmailChange}
                value={formValues.email}
                className={`form-control ${
                  formValues.email && errors.email ? "is-invalid" : ""
                }`}
              />
              {formValues.email && errors.email && (
                <div className="invalid-feedback">{errors.email}</div>
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>
                <FormattedMessage id="login.password" />
              </Form.Label>
              <Form.Control
                type="password"
                onChange={handlePasswordChange}
                value={formValues.password}
                className={`form-control ${
                  formValues.password && errors.password ? "is-invalid" : ""
                }`}
              />

              {formValues.password && errors.password && (
                <div className="invalid-feedback">{errors.password}</div>
              )}
            </Form.Group>

            <Button
              variant="primary"
              onClick={handleClick}
              disabled={
                !formValues.email ||
                !formValues.password ||
                errors.email ||
                errors.password
              }
            >
              <FormattedMessage id="login.button" />
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Login;

import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import FormGroup from "react-bootstrap/FormGroup";
import Spinner from "react-bootstrap/Spinner";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import { isValidLoginInfo } from "../../utils/validator/formValidator";
import { login, googleSignUp } from "../../firebase/auth";

import "./Login.scss";
import googleIcon from "../../assets/svg/googleIcon.svg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleGoogleSignUp = async () => {
    const result = await googleSignUp();
    console.log(result);
    if (result === "success") {
      toast.success("Account Created Successfully!");
      setTimeout(() => navigate("/"), 500);
    }
    if (!result) {
      toast.error("Something went wrong!");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { status, message } = isValidLoginInfo(email, password);
    console.log({ status, message });

    if (!status) {
      toast.error(message);
      return;
    }
    setIsLoading(true);
    const result = await login(email, password);
    if (result.userCredentials) {
      toast.success("Login Successful!");
      setTimeout(() => {
        navigate("/");
      }, 1000);
    }
    if (result.error) {
      toast.error(result.error.code);
    }
    console.log(result);
    setIsLoading(false);
  };

  return (
    <Container>
      <div className="card">
        <Row>
          <Col>
            <div className="left">
              <Form className="myForm text-center">
                <header>Login</header>

                <FormGroup>
                  <Form.Label>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-icon"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Form.Label>
                  <Form.Control
                    className="myInput"
                    placeholder="Email"
                    type="text"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                  />
                </FormGroup>

                <FormGroup>
                  <Form.Label>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-icon"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </Form.Label>
                  <FormControl
                    className="myInput"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </FormGroup>

                <FormGroup>
                  <Button
                    type="submit"
                    className="btn-submit"
                    onClick={handleSubmit}
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <Spinner
                        as="span"
                        animation="grow"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                      />
                    ) : (
                      "LOGIN"
                    )}
                  </Button>
                </FormGroup>
              </Form>

              <div className="oauth-section">
                <div className="google" onClick={handleGoogleSignUp}>
                  Sign In with
                  <img src={googleIcon} alt="google" />
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <div className="right">
              <div className="box">
                <header>Creative Network!</header>

                <p>Connect with the world! Expand your network!</p>
                <h6>Don't have an Account?</h6>
                <Link to="/signup">
                  <input
                    type="button"
                    className="btn_outline"
                    value="Sign Up"
                  />
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Login;

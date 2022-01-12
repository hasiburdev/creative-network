import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./Welcome.scss";

const Welcome = () => {
  return (
    <div className="welcome">
      <div className="box">
        <h1 className="my-2">Welcome to Creative Network!</h1>
        <h4 className="mb-4">A place to Connect with the world!</h4>
        <Link to="/signup">
          <Button className="my-2 btn-signup" size="lg">
            SignUp
          </Button>
        </Link>
        <Link to="/login">
          <Button variant="outline-secondary" className="my-2 mx-2" size="lg">
            Login
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Welcome;

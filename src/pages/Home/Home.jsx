import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Leftbar from "../../components/Home/Leftbar/Leftbar";
import "./Home.scss";

const Home = () => {
  return (
    <Container fluid className="home">
      <Row>
        <Col xs={1} className="left-col">
          <Leftbar />
        </Col>
        <Col md={3} className="side-col"></Col>
        <Col xs="auto" className="chat-col"></Col>
        <Col md={3} className="right-col"></Col>
      </Row>
    </Container>
  );
};

export default Home;

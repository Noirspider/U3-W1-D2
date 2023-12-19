import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function MyFooter() {
  return (
    <Container fluid className=" fixed-bottom p-5 bg-warning">
      <Row>
        <Col className="d-flex justify-content-center">
          <div>Sono un Kebababbaro Oscurorro</div>
        </Col>
      </Row>
    </Container>
  );
}

export default MyFooter;

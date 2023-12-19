import React from "react";
import Welcome from "./Welcome";
import fantasy from "../books/fantasy.json";
import { Row, Col } from "react-bootstrap";
import BookCard from "./BookCard";

function MyMain() {
  return (
    <>
      <Welcome />
      <Row className="gy-3">
        {fantasy.map((fantasybook, index) => {
          return (
            <Col sm={3} lg={2} key={`cardBook-${index}`}>
              <BookCard book={fantasybook} />
            </Col>
          );
        })}
      </Row>
    </>
  );
}

export default MyMain;

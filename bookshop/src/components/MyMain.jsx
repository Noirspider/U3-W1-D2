import React from "react";
import Welcome from "./Welcome";
import fantasy from "../books/fantasy.json";
import { Row, Col } from "react-bootstrap";
import BookCard from "./BookCard";

function MyMain() {
  return (
    <>
      <Welcome />
      <Row>
        {fantasy.map((fantasybook, index) => {
          return (
            <Col sm={4} key={`cardBook-${index}`}>
              <BookCard book={fantasybook} />
            </Col>
          );
        })}
      </Row>
    </>
  );
}

export default MyMain;

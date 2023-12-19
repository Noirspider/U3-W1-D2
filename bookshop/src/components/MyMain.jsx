import React from "react";
import Welcome from "./Welcome";
import { fantasy, history, horror, romance, scifi } from "./books";
import { Row, Col } from "react-bootstrap";
import BookCard from ./book

function MyMain() {
  return (
    <>
      <Welcome />
      <Row>
        {fantasy.map((fantasybook) => {
          return <BookCard />;
        })}
      </Row>
    </>
  );
}

export default MyMain;

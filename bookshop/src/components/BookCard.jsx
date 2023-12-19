import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function BookCard() {
  return (
    <Card key={props.asin}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          <p>DART KEBAB APPROVED!</p>
          <p>{props.category}</p>
          <p>{props.price}</p>
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default BookCard;

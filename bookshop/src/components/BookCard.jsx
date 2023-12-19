import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function BookCard(props) {
  return (
    <Card key={props.book.asin} style={{ height: "150px" }}>
      <Card.Img variant="top" src={props.book.img} className="object-fit-cover" />
      <Card.Body>
        <Card.Title>{props.book.title}</Card.Title>
        <Card.Text>
          <p>DART KEBAB APPROVED!</p>
          <p>{props.book.category}</p>
          <p>{props.book.price}</p>
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default BookCard;

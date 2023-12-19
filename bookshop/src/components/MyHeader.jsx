import React from "react";
import NavbarComp from "./MyNav";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

function MyHeader() {
  return (
    <Container>
      <NavbarComp />
    </Container>
  );
}

export default MyHeader;

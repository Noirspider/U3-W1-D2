import React from "react";
import { Alert } from "react-bootstrap";
//import "bootstrap/dist/css/bootstrap.min.css";

function Welcome() {
  return (
    <div>
      <h2>Che Belli quei tovaglioli da Kebab</h2>
      <Alert className="text-center" key="warning" variant="warning">
        DART KEBAB
      </Alert>
    </div>
  );
}

export default Welcome;

import React, { Component } from "react";
import { Heading } from "@chakra-ui/react";

class Titulo extends Component {
  render() {
    return (
      <>
        <Heading as="h2" size="xs" fontFamily="SF-bold">
          TRAZABILIDAD Y ALERTAS
        </Heading>
        <Heading as="h1" size="xl" className="mb-3" fontFamily="SF-bold">
          MEDIDORES DE CO<sub>2</sub>
        </Heading>
      </>
    );
  }
}

export default Titulo;

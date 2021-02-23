import React, { Component } from "react";
import { Container, Box, Text } from "@chakra-ui/react";
import "./Post.css";
import Titulo from "./Heading";

class Post extends Component {
  render() {
    return (
      <Container>
        <Box className="post">
          <Titulo />
          <Text fontFamily="SF-light">
            CO2 es parámetro del aire exhalado e indicador validado para medir
            riesgos de contagio. El control de la calidad del aire en interiores
            es un elemento clave para combatir la pandemia.
          </Text>
        </Box>
      </Container>
    );
  }
}

export default Post;

import React from "react";
import { Container, Box, Text } from "@chakra-ui/react";
import "./Post.css";
import Titulo from "./Heading";
import Contenido from "./Content";
import Imagen from "./Image";

const Post = ({ post }) => {
  return (
    <Container>
      <Box className={post.cName}>
        <Titulo title={post.title} subtitle={post.subtitle} />
        <Imagen image={post.image} />
        <Contenido
          content={post.content}
          contentFontF={post.contentFontF}
          contentColor={post.contentColor}
        />
      </Box>
    </Container>
  );
};

export default Post;

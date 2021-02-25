import React from "react";
import { Text } from "@chakra-ui/react";

const Contenido = (post) => {
  const isContentON = post.content !== "" ? true : false;
  if (isContentON) {
    return (
      <>
        <Text
          color={post.contentColor}
          fontFamily={post.contentFontF}
          fontSize="md"
        >
          {post.content}
        </Text>
      </>
    );
  } else {
    return <></>;
  }
};

export default Contenido;

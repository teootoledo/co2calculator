import React from "react";
import { Heading } from "@chakra-ui/react";

const Titulo = (post) => {
  const isHeadingON = post.title !== "" && post.subtitle !== "" ? true : false;
  if (isHeadingON) {
    return (
      <>
        <Heading as="h2" size="xs" fontFamily="SF-bold">
          {post.subtitle}
        </Heading>
        <Heading as="h1" size="xl" className="mb-3" fontFamily="SF-bold">
          {post.title}
        </Heading>
      </>
    );
  } else {
    return <></>;
  }
};

export default Titulo;

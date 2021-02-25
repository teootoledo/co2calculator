import React from "react";

const Imagen = (post) => {
  const isImageON = post.image !== "#" ? true : false;
  if (isImageON) {
    return (
      <>
        <img src={post.image} alt="" className="postImage" />
      </>
    );
  } else {
    return <></>;
  }
};

export default Imagen;

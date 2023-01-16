import React from "react";

const Slide = ({image}) => {
  console.log(image.url);
  // const imageObjectURL = URL.createObjectURL(image);
  // console.log(imageObjectURL);
  return (
    <>
      <img src={image.url} alt="melobit-slider" />
    </>
  );
};

export default Slide;

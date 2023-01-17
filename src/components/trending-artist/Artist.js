import React from "react";
import "./artist.css";

const Artist = ({ image, name }) => {
  return (
    <div className="artist">
      <img src={image} alt="" />
      <p>{name}</p>
    </div>
  );
};

export default Artist;

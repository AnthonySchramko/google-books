import React from "react";

const Card = ({ title, image, author, description }) => {
  return (
    <div>
      <p>Title: {title}</p>
      <p>Image: {image}</p>
      <p>Author: {author}</p>
      <p>Description: {description}</p>
    </div>
  );
};

export default Card;

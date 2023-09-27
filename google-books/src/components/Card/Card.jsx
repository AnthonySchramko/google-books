import React from "react";
import styles from "./Card.module.scss";
const Card = ({
  title,
  image,
  author,
  description = "No given description, please do look elsewhere for a description of this book",
}) => {
  return (
    <div className={styles.card}>
      <p>
        '{title}' by: {author}
      </p>
      <div>
        <img
          src={`${image}`}
          className={styles.background_image}
          title={description}
        ></img>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default Card;

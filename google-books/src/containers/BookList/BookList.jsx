import React from "react";
import Card from "../../components/Card/Card";
import styles from "./BookList.module.scss";
const BookList = ({ data }) => {
  console.log("data: ", data);
  return (
    <div className={styles.cardWrapper}>
      {data.map((book) => (
        <Card
          key={book.id}
          title={book.title}
          author={book.authors}
          description={book.description}
          image={book.image.thumbnail}
        />
      ))}
    </div>
  );
};

export default BookList;

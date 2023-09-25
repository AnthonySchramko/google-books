import React from "react";
import Card from "../../components/Card/Card";

const BookList = ({ data }) => {
  console.log("data: ", data);
  return (
    <div>
      {data.items.map((book) => (
        <Card
          key={book.id}
          title={book.volumeInfo.title}
          author={book.volumeInfo.authors}
          description={book.volumeInfo.description}
          image={book.volumeInfo.imageLinks.smallThumbnail}
        />
      ))}
    </div>
  );
};

export default BookList;

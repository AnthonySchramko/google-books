export const getBookBySearchTerm = async (searchTerm = "", limit = 20) => {
  const apiKey = "AIzaSyDHwGQbrgxOywACZkHy1LcF5ko-wbWTQ2w";
  if (searchTerm === "") {
    throw new Error("Search must have a value");
  }
  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&maxResults=${limit}&key=${apiKey}`,
    {
      headers: {
        Accept: "application/json",
      },
    }
  );
  console.log(response);
  if (!response.ok) {
    throw new Error("Failed to fetch books");
  }
  const data = await response.json();
  if (data.totalItems == 0) {
    throw new Error("No books found for search: " + searchTerm);
  }
  const actualBooks = data.items.map((book) => {
    const { title, description } = book.volumeInfo;
    // fixing missing values
    const authors = book.volumeInfo.authors || [""];
    const image = book.volumeInfo?.imageLinks || {};
    const { id } = book;
    if (image.thumbnail === undefined) {
      image.thumbnail =
        "https://bookstoreromanceday.org/wp-content/uploads/2020/08/book-cover-placeholder.png";
    } else {
      image.thumbnail += "&fife=w350-h500";
    }
    return { title, description, authors, image, id };
  });
  actualBooks.totalItems = data.totalItems;
  console.log("actual books: ", actualBooks);
  return actualBooks;
};

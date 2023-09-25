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
  if (!response.ok) {
    throw new Error("Failed to fetch books");
  }
  const data = await response.json();
  if (data.totalItems == 0) {
    throw new Error("No books found for search: " + searchTerm);
  }
  return data;
};

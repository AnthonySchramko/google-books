import { useEffect, useState } from "react";
import { getBookBySearchTerm } from "../../services/googleAPI.js";
import BookList from "../bookList/bookList.jsx";
import styles from "./BookLoader.module.scss";
const BookLoader = ({ searchData }) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (searchData === null) {
      return;
    }
    const { input: searchTerm, selected: limit } = searchData;
    setLoading(true);
    setError(null);
    setBooks([]);
    getBookBySearchTerm(searchTerm, limit)
      .then((books) => setBooks(books))
      .catch((e) => setError(e))
      .finally(() => setLoading(false));
  }, [searchData]);
  return (
    <>
      {loading && <h3 className={styles.loading}>Searching...</h3>}
      {!loading && error && <h3 className={styles.loading}>{error.message}</h3>}
      {!loading && books.totalItems > 0 && <BookList data={books} />}
    </>
  );
};

export default BookLoader;

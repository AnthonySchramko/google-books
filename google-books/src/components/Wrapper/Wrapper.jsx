import { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import BookLoader from "../../containers/BookLoader/BookLoader";
import styles from "./Wrapper.module.scss";
const Wrapper = () => {
  const [searchData, setSearchData] = useState(null);
  const onSearchSubmit = (data) => {
    setSearchData(data);
  };
  return (
    <div className={styles.wrapper}>
      <SearchBar
        placeholder="Search for a book"
        handleSubmit={onSearchSubmit}
      />
      <BookLoader searchData={searchData} />
    </div>
  );
};

export default Wrapper;

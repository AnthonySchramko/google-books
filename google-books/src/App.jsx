import { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import BookLoader from "./containers/BookLoader/BookLoader";

function App() {
  const [searchData, setSearchData] = useState(null);
  const onSearchSubmit = (data) => {
    setSearchData(data);
  };

  return (
    <>
      <SearchBar
        placeholder="Search for a book"
        handleSubmit={onSearchSubmit}
      />
      <BookLoader searchData={searchData} />
    </>
  );
}

export default App;

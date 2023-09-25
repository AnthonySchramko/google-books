import { useState } from "react";

const SearchBar = ({ placeholder, handleSubmit }) => {
  const [input, setInput] = useState("");
  const [selected, setSelected] = useState("5");
  const onSubmit = (e) => {
    e.preventDefault();
    const data = { input, selected };
    handleSubmit(data);
    setInput("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder={placeholder}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <select value={selected} onChange={(e) => setSelected(e.target.value)}>
        <option>5</option>
        <option>10</option>
        <option>15</option>
        <option>20</option>
      </select>
      <button>Search</button>
    </form>
  );
};

export default SearchBar;

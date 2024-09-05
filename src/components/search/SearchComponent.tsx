import { useState } from "react";
import "./style.css";
import { fetchUser } from "../../api/api";

const SearchComponent = () => {
  const [search, setSearch] = useState("");
  // handler for input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  //handler for submit button
  const handleSearch = () => {
    try {
      let response = fetchUser(search);
    } catch (error) {}
  };
  return (
    <div className="glass-effect search-container gap-10 rounded-10 flex justify-center item-center">
      <input
        className="search-input"
        value={search}
        onChange={handleInputChange}
      />
      <button className="search-button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};
export default SearchComponent;

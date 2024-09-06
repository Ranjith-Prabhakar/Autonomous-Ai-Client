import { useState } from "react";
import "./style.css";
import { fetchUser } from "../../api/api";
import toast from "react-hot-toast";

const SearchComponent = () => {
  const [name, setName] = useState("");
  // handler for input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  //handler for submit button
  const handleSearch = async () => {
    try {
      if (name === "") {
        toast.error("Please provide a name to fetch");
        return;
      }
      let response = await fetchUser(name);
      if(response === "Not found"){
        toast.error("User not found in this name")
      }
    } catch (error) {}
  };
  return (
    <div className="glass-effect search-container gap-10 rounded-10 flex justify-center item-center">
      <input
        className="search-input"
        value={name}
        onChange={handleInputChange}
      />
      <button className="search-button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};
export default SearchComponent;

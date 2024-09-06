import { useState } from "react";
import "./style.css";
import { fetchUser } from "../../api/api";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { loadPrimaryUser } from "../../redux/features/user/userSlice";
import { TSelector } from "../../types/userType";

const SearchComponent = ({ setSelctor }: TSelector) => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

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

      let user = await fetchUser(name);

      if (user === "Not Found") {
        toast.error("User not found with this name");
      } else if (user && typeof user !== "string") {
        // Dispatch only if user is an Axios response and has data
        dispatch(loadPrimaryUser(user));
        setSelctor(2);
      } else {
        toast.error("An unexpected error occurred while fetching the user");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    }
  };

  // searching handler for enter key
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="glass-effect search-container gap-10 rounded-10 flex justify-center item-center">
      <input
        className="search-input"
        value={name}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      <button className="search-button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};
export default SearchComponent;

import { useEffect, useState } from "react";
import "./style.css";
import {
  fetchFollowers,
  fetchMutualFriends,
  fetchRepo,
  fetchUser,
} from "../../api/api";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { loadPrimaryUser } from "../../redux/features/user/userSlice";
import { TSelector } from "../../types/userType";
import useGetPrimaryUser from "../../hooks/useGetPrimaryUser";
import { loadRepo } from "../../redux/features/repository/repositorySlice";
import { loadFollowers } from "../../redux/features/followers/followersSlice";
import { loadMutualFriends } from "../../redux/features/mutualFriends/mutualFriendSlice";

const SearchComponent = ({ selector, setSelctor }: TSelector) => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const currentUser = useGetPrimaryUser();

  // handler for input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  useEffect(() => {
    if (selector === 2) {
      conmponentInitialiser();
    }
    async function conmponentInitialiser() {
      let repo = await fetchRepo(currentUser.login as string);
      dispatch(loadRepo(repo));

      let followers = await fetchFollowers(currentUser.login as string);
      dispatch(loadFollowers(followers));

      let mutualFriends = await fetchMutualFriends(
        currentUser.login as string,
        currentUser.following as unknown as string,
        currentUser.followers as unknown as string
      );
      dispatch(loadMutualFriends(mutualFriends));
    }
  }, [currentUser]);
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
        setName("");
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
    <div className="glass-effect search-container w-full h-150 py-20 gap-10 rounded-10 flex flex-col justify-start item-center">
      <h1 className="text-white">Find User</h1>
      <div className="flex justify-center item-center gap-10 w-full  ">
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
    </div>
  );
};
export default SearchComponent;

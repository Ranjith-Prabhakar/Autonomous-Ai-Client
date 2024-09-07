import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import repoReducer from "./features/repository/repositorySlice";
import followersReducer from "./features/followers/followersSlice";
import mutualFriendReducer from "./features/mutualFriends/mutualFriendSlice";
const store = configureStore({
  reducer: {
    user: userReducer,
    repo: repoReducer,
    followers: followersReducer,
    mutualFriends: mutualFriendReducer,
  },
});

export default store;

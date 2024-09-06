import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import repoReducer from "./features/repository/repositorySlice";
import followersReducer from "./features/followers/followersSlice";
const store = configureStore({
  reducer: {
    user: userReducer,
    repo: repoReducer,
    followers: followersReducer,
  },
});

export default store;

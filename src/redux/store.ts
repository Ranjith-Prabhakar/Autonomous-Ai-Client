import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import repoReducer from "./features/repository/repositorySlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    repo:repoReducer
  },
});

export default store;

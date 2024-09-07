import { createSlice } from "@reduxjs/toolkit";
import { TMutualFriendsList } from "../../../types/mutualFriends";

export type TMutualFriends = {
  mutualFriends: TMutualFriendsList;
};

const initialState: TMutualFriends = {
  mutualFriends: [""],
};

const mutualFriendsSlice = createSlice({
  name: "mutualFriends",
  initialState,
  reducers: {
    loadMutualFriends: (state, action) => {
      console.log("inside loadMutualFriends  slice", action.payload);
      state.mutualFriends = action.payload;
    },
  },
});

export const { loadMutualFriends } = mutualFriendsSlice.actions;

export default mutualFriendsSlice.reducer;

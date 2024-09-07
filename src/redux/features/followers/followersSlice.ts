import { createSlice } from "@reduxjs/toolkit";
import { TFollowersList } from "../../../types/followersType";

export type TFollowers = {
  followers: TFollowersList;
};

const initialState: TFollowers = {
  followers: [
    {
      login: "",
      id: 0,
      node_id: "",
      avatar_url: "",
      gravatar_id: "",
      url: "",
      html_url: "",
      followers_url: "",
      following_url: "",
      gists_url: "",
      starred_url: "",
      subscriptions_url: "",
      organizations_url: "",
      repos_url: "",
      events_url: "",
      received_events_url: "",
      type: "",
      site_admin: false,
    },
  ],
};

const followersSlice = createSlice({
  name: "followers",
  initialState,
  reducers: {
    loadFollowers: (state, action) => {
      console.log("inside loadFollowers slice", action.payload);
      state.followers = action.payload;
    },
  },
});

export const { loadFollowers } = followersSlice.actions;

export default followersSlice.reducer;

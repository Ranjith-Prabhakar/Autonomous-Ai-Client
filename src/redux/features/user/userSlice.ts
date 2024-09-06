import { createSlice } from "@reduxjs/toolkit";
import { GitHubUser } from "../../../types/userType";

// TUser to handle the two GitHubUser types
export type TUser = {
  primaryUser: GitHubUser;
};

const initialState: TUser = {
  primaryUser: {
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
    name: "",
    company: "",
    blog: "",
    location: "",
    email: "",
    hireable: false,
    bio: "",
    twitter_username: "",
    public_repos: 0,
    public_gists: 0,
    followers: 0,
    following: 0,
    created_at: "",
    updated_at: "",
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loadPrimaryUser: (state, action) => {
      console.log("inside loadPrimary user slice", action.payload);
      state.primaryUser = action.payload;
    },
  },
});

export const { loadPrimaryUser } = userSlice.actions;

export default userSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GitHubUser } from "../../../types/types";

// TUser to handle the two GitHubUser types
type TUser = {
  primaryUser: GitHubUser;
  secondaryUser: GitHubUser;
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
  secondaryUser: {
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
    loadPrimaryUser: (state, action: PayloadAction<GitHubUser>) => {
      const {
        login,
        id,
        node_id,
        avatar_url,
        gravatar_id,
        url,
        html_url,
        followers_url,
        following_url,
        gists_url,
        starred_url,
        subscriptions_url,
        organizations_url,
        repos_url,
        events_url,
        received_events_url,
        type,
        site_admin,
        name,
        company,
        blog,
        location,
        email,
        hireable,
        bio,
        twitter_username,
        public_repos,
        public_gists,
        followers,
        following,
        created_at,
        updated_at,
      } = action.payload;

      state.primaryUser.login = login ?? "";
      state.primaryUser.id = id ?? 0;
      state.primaryUser.node_id = node_id ?? "";
      state.primaryUser.avatar_url = avatar_url ?? "";
      state.primaryUser.gravatar_id = gravatar_id ?? "";
      state.primaryUser.url = url ?? "";
      state.primaryUser.html_url = html_url ?? "";
      state.primaryUser.followers_url = followers_url ?? "";
      state.primaryUser.following_url = following_url ?? "";
      state.primaryUser.gists_url = gists_url ?? "";
      state.primaryUser.starred_url = starred_url ?? "";
      state.primaryUser.subscriptions_url = subscriptions_url ?? "";
      state.primaryUser.organizations_url = organizations_url ?? "";
      state.primaryUser.repos_url = repos_url ?? "";
      state.primaryUser.events_url = events_url ?? "";
      state.primaryUser.received_events_url = received_events_url ?? "";
      state.primaryUser.type = type ?? "";
      state.primaryUser.site_admin = site_admin ?? false;
      state.primaryUser.name = name ?? "";
      state.primaryUser.company = company ?? "";
      state.primaryUser.blog = blog ?? "";
      state.primaryUser.location = location ?? "";
      state.primaryUser.email = email ?? "";
      state.primaryUser.hireable = hireable ?? false;
      state.primaryUser.bio = bio ?? "";
      state.primaryUser.twitter_username = twitter_username ?? "";
      state.primaryUser.public_repos = public_repos ?? 0;
      state.primaryUser.public_gists = public_gists ?? 0;
      state.primaryUser.followers = followers ?? 0;
      state.primaryUser.following = following ?? 0;
      state.primaryUser.created_at = created_at ?? "";
      state.primaryUser.updated_at = updated_at ?? "";
    },
    loadSecondaryUser: (state, action: PayloadAction<GitHubUser>) => {
      const {
        login,
        id,
        node_id,
        avatar_url,
        gravatar_id,
        url,
        html_url,
        followers_url,
        following_url,
        gists_url,
        starred_url,
        subscriptions_url,
        organizations_url,
        repos_url,
        events_url,
        received_events_url,
        type,
        site_admin,
        name,
        company,
        blog,
        location,
        email,
        hireable,
        bio,
        twitter_username,
        public_repos,
        public_gists,
        followers,
        following,
        created_at,
        updated_at,
      } = action.payload;

      state.secondaryUser.login = login ?? "";
      state.secondaryUser.id = id ?? 0;
      state.secondaryUser.node_id = node_id ?? "";
      state.secondaryUser.avatar_url = avatar_url ?? "";
      state.secondaryUser.gravatar_id = gravatar_id ?? "";
      state.secondaryUser.url = url ?? "";
      state.secondaryUser.html_url = html_url ?? "";
      state.secondaryUser.followers_url = followers_url ?? "";
      state.secondaryUser.following_url = following_url ?? "";
      state.secondaryUser.gists_url = gists_url ?? "";
      state.secondaryUser.starred_url = starred_url ?? "";
      state.secondaryUser.subscriptions_url = subscriptions_url ?? "";
      state.secondaryUser.organizations_url = organizations_url ?? "";
      state.secondaryUser.repos_url = repos_url ?? "";
      state.secondaryUser.events_url = events_url ?? "";
      state.secondaryUser.received_events_url = received_events_url ?? "";
      state.secondaryUser.type = type ?? "";
      state.secondaryUser.site_admin = site_admin ?? false;
      state.secondaryUser.name = name ?? "";
      state.secondaryUser.company = company ?? "";
      state.secondaryUser.blog = blog ?? "";
      state.secondaryUser.location = location ?? "";
      state.secondaryUser.email = email ?? "";
      state.secondaryUser.hireable = hireable ?? false;
      state.secondaryUser.bio = bio ?? "";
      state.secondaryUser.twitter_username = twitter_username ?? "";
      state.secondaryUser.public_repos = public_repos ?? 0;
      state.secondaryUser.public_gists = public_gists ?? 0;
      state.secondaryUser.followers = followers ?? 0;
      state.secondaryUser.following = following ?? 0;
      state.secondaryUser.created_at = created_at ?? "";
      state.secondaryUser.updated_at = updated_at ?? "";
    },
  },
});

export const { loadPrimaryUser, loadSecondaryUser } = userSlice.actions;

export default userSlice.reducer;

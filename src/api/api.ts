import axios from "axios";
import catchAxiosError from "../utils/error/errorHandler";
import {
  getUserFromLocalStorage,
  setUserToLocalStorage,
  getUserRepoFromLocalStorage,
  setUserRepoToLocalStorage,
  getUserFollowersFromLocalStorage,
  setUserFollowersToLocalStorage,
} from "../utils/localStorage/LocalStorageHandler";
import { IGitHubRepository, TRepo } from "../types/repoType";
import { GitHubUser } from "../types/userType";
let BASE_URL = import.meta.env.VITE_BASE_URL;

export async function fetchUser(userName: string) {
  try {
    let user = getUserFromLocalStorage(userName);
    // Handle undefined case
    if (!user) {
      // Fetch from GitHub API if not in local storage
      const response = await axios.post(`${BASE_URL}/fetchUser`, { userName });
      setUserToLocalStorage(response.data.data);
      return response.data.data as GitHubUser; // response will be AxiosResponse
    }
    return user; // GitHubUser from localStorage
  } catch (error: unknown) {
    return catchAxiosError(error);
  }
}

export async function fetchRepo(userName: string, repos_url: string) {
  try {
    // console.log("inside fetchRepo",userName,repos_url)
    let repo = getUserRepoFromLocalStorage(userName);
    if (!repo) {
      // console.log("inside fetchRepo undefine", repo);
      const response = await axios.get(`${repos_url}`);
      // console.log("inside fetchRepo response", response);

      let newRepo = setUserRepoToLocalStorage(userName, response.data);
      // console.log("neeeeeeeeeeeeeeeeexxxxxxxx",newRepo[userName])
      return newRepo[userName] as IGitHubRepository;
    }
    return repo as IGitHubRepository;
  } catch (error: unknown) {
    return catchAxiosError(error);
  }
}

export async function fetchFollowers(userName: string, followers_url: string) {
  try {
    console.log("inside fetchFollowers", userName, followers_url);
    let followers = getUserFollowersFromLocalStorage(userName);
    if (!followers) {
      console.log("inside fetchFollowers undefine", followers);
      const response = await axios.get(`${followers_url}`);
      console.log("inside fetchFollowers response", response);
      let newFollower = setUserFollowersToLocalStorage(userName, response.data);
      console.log("neeeeeeeeeeeeeeeeexxxxxxxx", newFollower[userName]);
      return newFollower[userName];
    }
    return followers as TRepo;
  } catch (error: unknown) {
    return catchAxiosError(error);
  }
}

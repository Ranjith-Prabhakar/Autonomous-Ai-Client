import axios, { AxiosResponse } from "axios";
import catchAxiosError from "../utils/error/errorHandler";
import {
  getUserFromLocalStorage,
  setUserToLocalStorage,
  getUserRepoFromLocalStorage,
  setUserRepoToLocalStorage,
  getUserFollowersFromLocalStorage,
  setUserFollowersToLocalStorage,
} from "../utils/localStorage/LocalStorageHandler";
import { TRepo } from "../types/repoType";
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
    console.log("inside fetchRepo",userName,repos_url)
    let repo = getUserRepoFromLocalStorage(userName);
    if (!repo) {
      console.log("inside fetchRepo undefine", repo);
      const response = await axios.get(`${repos_url}`);
      console.log("inside fetchRepo response", response);

      let newRepo = setUserRepoToLocalStorage(userName, response.data);
      return newRepo as TRepo;
    }
    return repo as TRepo;
  } catch (error: unknown) {
    return catchAxiosError(error);
  }
}

export async function fetchFollowers(userName: string, followers_url: string) {
  try {
    let repo = getUserFollowersFromLocalStorage(userName);
    if (!repo) {
      const response = await axios.get(`${followers_url}`);
      setUserFollowersToLocalStorage(userName, response.data);
      return response.data;
    }
    return repo as TRepo;
  } catch (error: unknown) {
    return catchAxiosError(error);
  }
}

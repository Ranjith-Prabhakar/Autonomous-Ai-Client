import axios from "axios";
import catchAxiosError from "../utils/error/errorHandler";
import {
  getUserFromLocalStorage,
  setUserToLocalStorage,
  getUserRepoFromLocalStorage,
  setUserRepoToLocalStorage,
  getUserFollowersFromLocalStorage,
  setUserFollowersToLocalStorage,
  getMutualFriendsFromLocalStorage,
  setMutualFriendsFromLocalStorage,
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

export async function fetchRepo(userName: string) {
  try {
    let repo = getUserRepoFromLocalStorage(userName);
    if (!repo) {
      

      const response = await axios.post(`${BASE_URL}/fetchRepo`, { userName });

      console.log("response", response.data.data.repositories);

      setUserRepoToLocalStorage(
        userName,
        response.data.data.repositories
      );
      return response.data.data.repositories as IGitHubRepository;
    }
    return repo as IGitHubRepository;
  } catch (error: unknown) {
    return catchAxiosError(error);
  }
}

export async function fetchFollowers(userName: string) {
  try {
    let followers = getUserFollowersFromLocalStorage(userName);
    if (!followers) {
      const response = await axios.post(`${BASE_URL}/fetchFollowers`, {
        userName,
      });
      setUserFollowersToLocalStorage(
        userName,
        response.data.data.followers
      );
      return response.data.data.followers;
    }
    return followers as TRepo;
  } catch (error: unknown) {
    return catchAxiosError(error);
  }
}

export async function fetchMutualFriends(
  userName: string,
  followingCount: string,
  followersCount: string
) {
  try {
    let mutaualFriends = getMutualFriendsFromLocalStorage(userName);
    if (!mutaualFriends) {
      const response = await axios.post(`${BASE_URL}/fetchMutualFriends`, {
        userName,
        followingCount,
        followersCount,
      });
      console.log("response", response);
     setMutualFriendsFromLocalStorage(
        userName,
        response.data.data
      );
      return response.data.data;
    }
    return mutaualFriends;
  } catch (error: unknown) {
    return catchAxiosError(error);
  }
}

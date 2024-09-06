import axios, { AxiosResponse } from "axios";
import catchAxiosError from "../utils/error/errorHandler";
import { getUserFromLocalStorage } from "../utils/localStorage/LocalStorageHandler";
let BASE_URL = import.meta.env.VITE_BASE_URL;

export async function fetchUser(
  userName: string
): Promise<AxiosResponse | string | null> {
  try {
    let user = getUserFromLocalStorage(userName);

    // Handle undefined case
    if (!user) {
      // Fetch from GitHub API if not in local storage
      const response = await axios.get(`${BASE_URL}/users/${userName}`);
      return response; // response will be AxiosResponse
    }

    return user; // user could be null or valid GitHubUser from localStorage
  } catch (error: unknown) {
    return catchAxiosError(error);
  }
}

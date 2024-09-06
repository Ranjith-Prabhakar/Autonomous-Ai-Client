import axios from "axios";
import catchAxiosError from "../utils/error/errorHandler";
import { getUserFromLocalStorage } from "../utils/localStorage/LocalStorageHandler";
let BASE_URL = import.meta.env.VITE_BASE_URL;

export async function fetchUser(userName: string) {
  try {
    // check whether the user exist on local storage
    let user = getUserFromLocalStorage(userName);
    if (!user) {
      // if the user not in the local storage, trying to fetch from git hub 
      user = await axios.get(`${BASE_URL}/users/${userName}`);
      console.log("user", user);
      
    }
  } catch (error: unknown) {
    return catchAxiosError(error);
  }
}

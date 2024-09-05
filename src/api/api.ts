import axios from "axios";
let BASE_URL = import.meta.env.VITE_BASE_URL;

export async function fetchUser(userName: string) {
  try {
    const response = await axios.get(`${BASE_URL}/users/${userName}`);
    console.log("response", response);
  } catch (error) {}
}

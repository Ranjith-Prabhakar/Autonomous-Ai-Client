import { GitHubUser } from "../../types/types";

export function getUserFromLocalStorage(userName: string) {
  let result = localStorage.getItem("gitHubUsers");
  if (result) {
    let parsedUsers = JSON.parse(result as string);
    for (let key in parsedUsers) {
      if (key === userName) {
        return parsedUsers[key];
      }
    }
  }
  return null;
}

export function setUserToLocalStorage(user: GitHubUser) {
  let result = localStorage.getItem("gitHubUsers");
  if (result) {
    let parsedUsers = JSON.parse(result as string);
    parsedUsers[user.login as string] = user;
    localStorage.setItem("gitHubUsers", JSON.stringify(parsedUsers));
  } else {
    let parsedUsers = {
      [user.login as string]: user,
    };
    localStorage.setItem("gitHubUsers", JSON.stringify(parsedUsers));
  }
}

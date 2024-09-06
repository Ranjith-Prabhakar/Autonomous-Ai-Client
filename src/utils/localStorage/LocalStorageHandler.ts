import { TLocalStorageGitHubUsers } from "../../types/types";

export function getUserFromLocalStorage(userName: string) {
  let result = localStorage.getItem("gitHubUsers");
  let parsedUsers = JSON.parse(result as string);
  let user;
  for (let key in parsedUsers) {
    if (key === userName) {
      user = parsedUsers[key];
      return;
    }
  }
  return user;
}

export function setUserToLocalStorage(user: TLocalStorageGitHubUsers) {
  let result = localStorage.getItem("gitHubUsers");
  if (result) {
    let parsedUsers = JSON.parse(result as string);
    parsedUsers[user.login as string] = user;
    parsedUsers = JSON.stringify(parsedUsers);
    localStorage.setItem("gitHubUsers", parsedUsers);
  }
}

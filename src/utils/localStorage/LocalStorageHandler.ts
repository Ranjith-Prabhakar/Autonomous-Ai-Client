import { TFollowersList } from "../../types/followersType";
import { TRepo } from "../../types/repoType";
import { GitHubUser } from "../../types/userType";

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

export function getUserRepoFromLocalStorage(userName: string) {
  let result = localStorage.getItem("usersRepo");
  if (result) {
    //  console.log("inside getUserRepoFromLocalStorage if resulu",result);
    let parsedRepo = JSON.parse(result as string);
    for (let key in parsedRepo) {
      if (key === userName) {
        return parsedRepo[key];
      }
    }
  }
  //  console.log("inside getUserRepoFromLocalStorage out resulu", result);
  return null;
}

export function setUserRepoToLocalStorage(userName: string, repo: TRepo) {
  console.log("inside setUserRepoToLocalStorage", userName, repo);
  let result = localStorage.getItem("usersRepo");
  if (result) {
    console.log("inside setUserRepoToLocalStorage if", result);
    let parsedRepo = JSON.parse(result as string);
    let newParsedRepo = { ...parsedRepo, [userName]: repo };
    console.log(
      "inside setUserRepoToLocalStorage if parsedRepo",
      newParsedRepo
    );
    localStorage.setItem("usersRepo", JSON.stringify(newParsedRepo));
    return newParsedRepo;
  } else {
    let parsedRepo = {
      [userName]: repo,
    };
    console.log("setUserRepoToLocalStorage else parsedRepo", parsedRepo);
    localStorage.setItem("usersRepo", JSON.stringify(parsedRepo));
    return parsedRepo;
  }
}
// ---------------------------------------------------------------------------------------------------------------------
export function getUserFollowersFromLocalStorage(userName: string) {
  // console.log("inside getUserRepoFromLocalStorage",userName);
  let result = localStorage.getItem("followersList");
  if (result) {
    //  console.log("inside getUserRepoFromLocalStorage if resulu",result);
    let parsedFollowers = JSON.parse(result as string);
    for (let key in parsedFollowers) {
      if (key === userName) {
        return parsedFollowers[key];
      }
    }
  }
  //  console.log("inside getUserRepoFromLocalStorage out resulu", result);
  return null;
}

export function setUserFollowersToLocalStorage(
  userName: string,
  followers: TFollowersList
) {
  // console.log("inside setUserRepoToLocalStorage", userName, followers);
  let result = localStorage.getItem("followersList");
  console.log("setUserFollowersToLocalStorage", result);
  if (result) {
    // console.log("inside setUserRepoToLocalStorage if", result);
    let parsedFollowers = JSON.parse(result as string);
    // parsedFollowers[userName] = parsedFollowers;
      let newParsedRepo = { ...parsedFollowers, [userName]: followers };
    console.log(
      "setUserFollowersToLocalStorage --if -- parsedFollowers",
      newParsedRepo
    );
    localStorage.setItem("followersList", JSON.stringify(newParsedRepo));
    return newParsedRepo;
  } else {
    let parsedFollowers = {
      [userName]: followers,
    };
    console.log(
      "setUserFollowersToLocalStorage -- else -- parsedFollowers",
      parsedFollowers
    );
    // console.log("else locla", parsedFollowers);
    localStorage.setItem("followersList", JSON.stringify(parsedFollowers));
  }
}

// --------------------------------------------------------------------------------------------------------



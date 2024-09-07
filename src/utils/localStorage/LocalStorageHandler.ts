import { TFollowersList } from "../../types/followersType";
import { TMutualFriendsList } from "../../types/mutualFriends";
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
  // console.log("inside setUserRepoToLocalStorage", userName, repo);
  let result = localStorage.getItem("usersRepo");
  if (result) {
    // console.log("inside setUserRepoToLocalStorage if", result);
    let parsedRepo = JSON.parse(result as string);
    let newParsedRepo = { ...parsedRepo, [userName]: repo };
    // console.log(
    //   "inside setUserRepoToLocalStorage if parsedRepo",
    //   newParsedRepo
    // );
    localStorage.setItem("usersRepo", JSON.stringify(newParsedRepo));
    return newParsedRepo;
  } else {
    let parsedRepo = {
      [userName]: repo,
    };
    // console.log("setUserRepoToLocalStorage else parsedRepo", parsedRepo);
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
  // console.log("setUserFollowersToLocalStorage", result);
  if (result) {
    // console.log("inside setUserRepoToLocalStorage if", result);
    let parsedFollowers = JSON.parse(result as string);
    // parsedFollowers[userName] = parsedFollowers;
    let newParsedRepo = { ...parsedFollowers, [userName]: followers };
    // console.log(
    //   "setUserFollowersToLocalStorage --if -- parsedFollowers",
    //   newParsedRepo
    // );
    localStorage.setItem("followersList", JSON.stringify(newParsedRepo));
    return newParsedRepo;
  } else {
    let parsedFollowers = {
      [userName]: followers,
    };
    // console.log(
    //   "setUserFollowersToLocalStorage -- else -- parsedFollowers",
    //   parsedFollowers
    // );
    // console.log("else locla", parsedFollowers);
    localStorage.setItem("followersList", JSON.stringify(parsedFollowers));
    return parsedFollowers;
  }
}

// --------------------------------------------------------------------------------------------------------

export function getMutualFriendsFromLocalStorage(userName: string) {
  console.log("inside getMutualFriendsFromLocalStorage", userName);
  let result = localStorage.getItem("mutualFriendsList");
  if (result) {
    console.log("inside getMutualFriendsFromLocalStorage if resulu", result);
    let parsedMutaualFriends = JSON.parse(result as string);
    console.log("parsedFollowers====", parsedMutaualFriends);
    for (let key in parsedMutaualFriends) {
      if (key === userName) {
        return parsedMutaualFriends[key];
      }
    }
    return null;
  } else {
    console.log("inside getMutualFriendsFromLocalStorage out resulu", result);
    return null;
  }
}

export function setMutualFriendsFromLocalStorage(
  userName: string,
  mutaualFriends: TMutualFriendsList
) {
  console.log(
    "inside setMutualFriendsFromLocalStorage",
    userName,
    mutaualFriends
  );
  let result = localStorage.getItem("mutualFriendsList");
  console.log("setUserFollowersToLocalStorage", result);
  if (result) {
    console.log("inside setMutualFriendsFromLocalStorage if", result);
    let parsedMutaualFriends = JSON.parse(result as string);
    // parsedFollowers[userName] = parsedFollowers;
    let newParsedFollowers = {
      ...parsedMutaualFriends,
      [userName]: mutaualFriends,
    };
    console.log(
      "setMutualFriendsFromLocalStorage --if -- parsedFollowers",
      newParsedFollowers
    );
    localStorage.setItem(
      "mutualFriendsList",
      JSON.stringify(newParsedFollowers)
    );
    return newParsedFollowers;
  } else {
    let parsedMutaualFriends = {
      [userName]: mutaualFriends,
    };
    console.log(
      "setMutualFriendsFromLocalStorage -- else -- parsedFollowers",
      parsedMutaualFriends
    );
    console.log(
      "setMutualFriendsFromLocalStorage else locla",
      parsedMutaualFriends
    );
    localStorage.setItem(
      "mutualFriendsList",
      JSON.stringify(parsedMutaualFriends)
    );
    return parsedMutaualFriends;
  }
}

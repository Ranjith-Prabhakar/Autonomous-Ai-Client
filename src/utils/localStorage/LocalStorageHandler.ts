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
    let parsedRepo = JSON.parse(result as string);
    for (let key in parsedRepo) {
      if (key === userName) {
        return parsedRepo[key];
      }
    }
  }
  return null;
}

export function setUserRepoToLocalStorage(userName: string, repo: TRepo) {
  let result = localStorage.getItem("usersRepo");
  if (result) {
    let parsedRepo = JSON.parse(result as string);
    let newParsedRepo = { ...parsedRepo, [userName]: repo };

    localStorage.setItem("usersRepo", JSON.stringify(newParsedRepo));
  } else {
    let parsedRepo = {
      [userName]: repo,
    };
    localStorage.setItem("usersRepo", JSON.stringify(parsedRepo));
    return parsedRepo;
  }
}
// ---------------------------------------------------------------------------------------------------------------------
export function getUserFollowersFromLocalStorage(userName: string) {
  let result = localStorage.getItem("followersList");
  if (result) {
    let parsedFollowers = JSON.parse(result as string);
    for (let key in parsedFollowers) {
      if (key === userName) {
        return parsedFollowers[key];
      }
    }
  }
  return null;
}

export function setUserFollowersToLocalStorage(
  userName: string,
  followers: TFollowersList
) {
  let result = localStorage.getItem("followersList");
  if (result) {
    let parsedFollowers = JSON.parse(result as string);
    let newParsedRepo = { ...parsedFollowers, [userName]: followers };

    localStorage.setItem("followersList", JSON.stringify(newParsedRepo));
    return newParsedRepo;
  } else {
    let parsedFollowers = {
      [userName]: followers,
    };

    localStorage.setItem("followersList", JSON.stringify(parsedFollowers));
    return parsedFollowers;
  }
}

// --------------------------------------------------------------------------------------------------------

export function getMutualFriendsFromLocalStorage(userName: string) {
  let result = localStorage.getItem("mutualFriendsList");
  if (result) {
    let parsedMutaualFriends = JSON.parse(result as string);
    for (let key in parsedMutaualFriends) {
      if (key === userName) {
        return parsedMutaualFriends[key];
      }
    }
    return null;
  } else {
    return null;
  }
}

export function setMutualFriendsFromLocalStorage(
  userName: string,
  mutaualFriends: TMutualFriendsList
) {
  let result = localStorage.getItem("mutualFriendsList");
  if (result) {
    let parsedMutaualFriends = JSON.parse(result as string);
    let newParsedFollowers = {
      ...parsedMutaualFriends,
      [userName]: mutaualFriends,
    };

    localStorage.setItem(
      "mutualFriendsList",
      JSON.stringify(newParsedFollowers)
    );
    return newParsedFollowers;
  } else {
    let parsedMutaualFriends = {
      [userName]: mutaualFriends,
    };
    localStorage.setItem(
      "mutualFriendsList",
      JSON.stringify(parsedMutaualFriends)
    );
    return parsedMutaualFriends;
  }
}

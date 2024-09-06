import { useSelector } from "react-redux";

import { TFollowers } from "../redux/features/followers/followersSlice";

const useGetFollowers = () => {
  const repo = useSelector(
    (state: { followers: TFollowers }) => state.followers.followers
  );
  return repo;
};

export default useGetFollowers;

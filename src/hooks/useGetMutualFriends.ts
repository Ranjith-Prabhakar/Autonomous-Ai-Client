import { useSelector } from "react-redux";

import { TMutualFriends } from "../redux/features/mutualFriends/mutualFriendSlice";

const useGetMutualFriends = () => {
  const repo = useSelector(
    (state: { mutualFriends: TMutualFriends }) =>
      state.mutualFriends.mutualFriends
  );
  return repo;
};

export default useGetMutualFriends;

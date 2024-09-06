import { useSelector } from "react-redux";
import { TUser } from "../redux/features/user/userSlice";

const useGetPrimaryUser = () => {
  const primaryUser = useSelector(
    (state: { user: TUser }) => state.user.primaryUser
  );
  return primaryUser;
};

export default useGetPrimaryUser;

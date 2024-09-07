import { useEffect } from "react";
import "./style.css";
import useGetPrimaryUser from "../../hooks/useGetPrimaryUser";
import { fetchFollowers, fetchMutualFriends, fetchRepo } from "../../api/api";
import { loadPrimaryUser } from "../../redux/features/user/userSlice";
import { useDispatch } from "react-redux";
import { fetchUser } from "../../api/api";
import toast from "react-hot-toast";
import { GitHubUser } from "../../types/userType";
import { loadRepo } from "../../redux/features/repository/repositorySlice";
import { loadFollowers } from "../../redux/features/followers/followersSlice";
import useGetFollowers from "../../hooks/useGetFollowers";
import { loadMutualFriends } from "../../redux/features/mutualFriends/mutualFriendSlice";

type Props = {
  setActive: React.Dispatch<React.SetStateAction<number>>;
};

const Followers = ({ setActive }: Props) => {
  const primaryUser = useGetPrimaryUser();
  const followers = useGetFollowers();
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchingFollowers() {
      let followers = await fetchFollowers(
        primaryUser.login as string,
      );
      dispatch(loadFollowers(followers));
    }
    fetchingFollowers();
  }, []);


  const handleChangeUser = async (name: string) => {
    try {
      let user: GitHubUser = await fetchUser(name);
      dispatch(loadPrimaryUser(user));
      let repo = await fetchRepo(
        user.login as string,
      );
      dispatch(loadRepo(repo));

      let followers = await fetchFollowers(
        user.login as string,
      );
      dispatch(loadFollowers(followers));

      let mutualFriends = await fetchMutualFriends(
        user.login as string,
        user.following as unknown as string,
        user.followers as unknown as string
      );
      dispatch(loadMutualFriends(mutualFriends));

      setActive(1);
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <>
      <div className="p-20 w-full h-full">
        <table className="w-full border-1">
          <thead>
            <tr>
              <th>No</th>
              <th>Name of Project</th>
              <th>
                <div className="flex justify-center ">
                  <h4 className="ms-50"> Visit</h4>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {followers &&
              followers.map((item, index) => (
                <tr key={item.login}>
                  <td>{index + 1}</td>
                  <td>{item.login}</td>
                  <td>
                    <div className="flex justify-end ">
                      <button
                        className="me-20"
                        onClick={() => {
                          handleChangeUser(item.login);
                        }}
                      >
                        view more
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Followers;

import { useEffect, useState } from "react";
import "./style.css";
import useGetPrimaryUser from "../../hooks/useGetPrimaryUser";
import { fetchFollowers, fetchRepo } from "../../api/api";
import { TFollowersList } from "../../types/followersType";
import { loadPrimaryUser } from "../../redux/features/user/userSlice";
import { useDispatch } from "react-redux";
import { fetchUser } from "../../api/api";
import toast from "react-hot-toast";
import { GitHubUser } from "../../types/userType";
import { loadRepo } from "../../redux/features/repository/repositorySlice";
import { loadFollowers } from "../../redux/features/followers/followersSlice";
import useGetFollowers from "../../hooks/useGetFollowers";

type Props = {
  setActive: React.Dispatch<React.SetStateAction<number>>;
};

const Followers = ({ setActive }: Props) => {
  const primaryUser = useGetPrimaryUser();
  const followers = useGetFollowers();
  // const [followersList, setFollowersList] = useState<TFollowersList>();
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchingFollowers() {
      let followers = await fetchFollowers(
        primaryUser.login as string,
        primaryUser.followers_url as string
      );
      dispatch(loadFollowers(followers));

     
    }
    fetchingFollowers();
  }, []);

//   useEffect(() => {
//  setFollowersList(followers);
//   }, [followers]);

  //handler for submit button
  const handleChangeUser = async (name: string) => {
    try {
      let user: GitHubUser = await fetchUser(name);
      dispatch(loadPrimaryUser(user));
      let repo = await fetchRepo(
        user.login as string,
        user.repos_url as string
      );
      dispatch(loadRepo(repo));

       let followers = await fetchFollowers(
         primaryUser.login as string,
         primaryUser.followers_url as string
       );
       dispatch(loadFollowers(followers));

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
            <th>No</th>
            <th>Name of Project</th>
            <th>Visit</th>
          </thead>
          <tbody>
            {followers &&
              followers.map((item, index) => (
                <tr key={item.login}>
                  <td>{index + 1}</td>
                  <td>{item.login}</td>
                  <td>
                    <div className="flex gap-15">
                      <button
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

import { useEffect, useState } from "react";
import "./style.css";
import useGetPrimaryUser from "../../hooks/useGetPrimaryUser";
import { fetchRepo } from "../../api/api";
import { IGitHubRepository } from "../../types/repoType";
import RepoViewMore from "./RepoViewMore";
import useGetRepositories from "../../hooks/useGetRepositories";
import { useDispatch } from "react-redux";
import { loadRepo } from "../../redux/features/repository/repositorySlice";

const Repo = () => {
  const primaryUser = useGetPrimaryUser();
  const repo = useGetRepositories();
  // const [repoList, setRepoList] = useState<TRepo>();
  const [visible, setVisible] = useState(false);
  const [viewRepo, setViewRepo] = useState<IGitHubRepository>();
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchingRepo() {
      let repo = await fetchRepo(
        primaryUser.login as string,
      );
      console.log("xxxxxxxxxxxxxxx", repo);
      dispatch(loadRepo(repo));
    }
    fetchingRepo();
  }, []);

  // useEffect(() => {
  //   console.log("reeeeeeeee", repo);
  //   setRepoList(repo);
  // }, [repo]);

  return (
    <>
      <div className="p-20 w-full h-full">
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Name of Project</th>
              <th>
                <div className="flex justify-center ">
                  <h4 className="ms-50">Visit</h4>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {repo &&
              repo.map((item, index) => (
                <tr key={item.name}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>
                    <div className="flex justify-end ">
                      <button
                        className="me-20"
                        onClick={() => {
                          setVisible(!visible);
                          setViewRepo(item);
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
      {visible && viewRepo && (
        <RepoViewMore repo={viewRepo} setVisible={setVisible} />
      )}
    </>
  );
};

export default Repo;

// import { useEffect, useState } from "react";
// import "./style.css";
// import useGetPrimaryUser from "../../hooks/useGetPrimaryUser";
// import { fetchRepo } from "../../api/api";
// import { IGitHubRepository, TRepo } from "../../types/repoType";
// import RepoViewMore from "./RepoViewMore";
// type Props = {
//   active: number;
// };
// const Repo = ({ active }: Props) => {
//   const primaryUser = useGetPrimaryUser();
//   const [repoList, setRepoList] = useState<TRepo>();
//   const [visible, setVisible] = useState(false);
//   const [repo, setRepo] = useState<IGitHubRepository>();
//   console.log("primaryUser", primaryUser);
//   useEffect(() => {
//     async function fetchingRepo() {
//       let repo = await fetchRepo(
//         primaryUser.login as string,
//         primaryUser.repos_url as string
//       );
//       console.log("repo-----------", repo);
//       setRepoList(repo);
//     }
//     fetchingRepo();
//   }, []);

//   return (
//     <div className="w-full h-full flex flex-col">
//       <div className="border-b-1 flex justify-center item-center">
//         <h1 className="text-white">
//           {active === 1
//             ? "Repo List"
//             : active === 2
//             ? "Followers List"
//             : "Mutual Friendds"}
//         </h1>
//       </div>
//       <div className="p-20 w-full h-full">
//         <table className="w-full border-1">
//           <thead>
//             <th>No</th>
//             <th>Name of Project</th>
//             <th>Visit</th>
//           </thead>
//           <tbody>
//             {repoList &&
//               repoList.map((item, index) => (
//                 <tr key={item.name}>
//                   <td>{index + 1}</td>
//                   <td>{item.name}</td>
//                   <td>
//                     <div className="flex gap-15">
//                       <button
//                         onClick={() => {
//                           setVisible(!visible);
//                           setRepo(item);
//                         }}
//                       >
//                         view more
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//           </tbody>
//         </table>
//       </div>
//       {visible && repo && <RepoViewMore repo={repo} setVisible={setVisible} />}
//     </div>
//   );
// };

// export default Repo;

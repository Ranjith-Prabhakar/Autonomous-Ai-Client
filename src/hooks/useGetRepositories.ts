import { useSelector } from "react-redux";

import { TUserRepo } from "../redux/features/repository/repositorySlice";

const useGetRepositories = () => {
  const repo = useSelector((state: { repo: TUserRepo }) => state.repo.repo);
  return repo;
};

export default useGetRepositories;

import Followers from "./Followers";
import Repo from "./Repo";
import "./style.css";
type Props = {
  active: number;
  setActive: React.Dispatch<React.SetStateAction<number>>;
};
const DataTable = ({ active, setActive }: Props) => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="border-b-1 flex justify-center item-center">
        <h1 className="text-white">
          {active === 1
            ? "Repo List"
            : active === 2
            ? "Followers List"
            : "Mutual Friendds"}
        </h1>
      </div>
      {/*  */}
      {active === 1 && <Repo />}
      {active === 2 && <Followers setActive={setActive}/>}
    </div>
  );
};

export default DataTable;

import useGetPrimaryUser from "../../hooks/useGetPrimaryUser";
type Props = {
  active: number;
  setActive: React.Dispatch<React.SetStateAction<number>>;
};
const ProfileComponent = ({ active, setActive }: Props) => {
  const primaryUser = useGetPrimaryUser();
  return (
    <div className="glass-effect h-70vh w-full rounded-10 flex px-20  pt-20 flex flex-col">
      <div className="flex gap-20 text-white font-800 text-20">
        <img
          src={primaryUser.avatar_url}
          alt="profile-image"
          className="w-200 h-200 rounded-full"
        />

        <div className="flex flex-col justify-start">
          <table>
            <tr className="h-30">
              <th>Name</th>
              <td className="nowrap">{`: ${primaryUser.name}`}</td>
            </tr>
            <tr className="h-30">
              <th>Joined</th>
              <td className="nowrap">{`: ${
                primaryUser?.created_at?.split("T")[0]
              }`}</td>
            </tr>
            <tr className="h-30">
              <th>Followers</th>
              <td className="nowrap">{`: ${primaryUser.followers}`}</td>
            </tr>
            <tr className="h-30">
              <th>Following</th>
              <td className="nowrap">{`: ${primaryUser.following}`}</td>
            </tr>
            {primaryUser.location && (
              <tr className="h-30">
                <th>Location</th>
                <td className="nowrap">{`: ${primaryUser.location}`}</td>
              </tr>
            )}
          </table>
        </div>
      </div>
      <div className="flex justify-center item-center h-full gap-20">
        <div
          className={`rounded-5 px-10 py-5 pointer ${
            active === 1 ? "bg-disable text-white" : "bg-white text-black "
          }`}
          aria-disabled={`${active === 1 ? true : false}`}
          onClick={() => setActive(1)}
        >
          Repository List
        </div>
        <div
          className={`rounded-5 px-10 py-5 pointer ${
            active === 2 ? "bg-disable text-white" : "bg-white text-black "
          }`}
          aria-disabled={`${active === 2 ? true : false}`}
          onClick={() => setActive(2)}
        >
          Followers List
        </div>
        <div
          className={`rounded-5 px-10 py-5 pointer ${
            active === 3 ? "bg-disable text-white" : "bg-white text-black "
          }`}
          aria-disabled={`${active === 3 ? true : false}`}
          onClick={() => setActive(3)}
        >
          Mutual Friends
        </div>
      </div>
    </div>
  );
};

export default ProfileComponent;

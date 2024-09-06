import { useSelector } from "react-redux";
import { TUser } from "../../redux/features/user/userSlice";


const ProfileComponent = () => {
   const primaryUser = useSelector(
     (state: { user: TUser }) => state.user.primaryUser
   );
  return (
    <div className="glass-effect h-70vh w-full rounded-10 flex px-20  pt-20 flex flex-col">
      <div className="flex gap-20 text-white font-800 text-20">
        <img
          src={primaryUser.avatar_url}
          alt="profile-image"
          className="w-200 h-200 rounded-full"
        />
        <div className="flex justify-center item-center h-full gap-20">
          <div className="rounded-5 bg-white text-black px-10 py-5 pointer">
            Followers List
          </div>
        </div>
      </div>

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
  );
}

export default ProfileComponent
import { useEffect, useState } from "react";
import { TSelector } from "../../types/userType";
import ErrorBoundary from "../errorBoundry/ErrorBoundry";
import SearchComponent from "../search/SearchComponent";
import ProfileComponent from "./ProfileComponent";
import useGetPrimaryUser from "../../hooks/useGetPrimaryUser";
import DataTable from "./DataTableComponent";

const PrimaryUser = ({ selector, setSelctor }: TSelector) => {
  const currentUser = useGetPrimaryUser();
  const [active, setActive] = useState(1);
  const [user, setUser] = useState("primary");
  const [userName, setUserName] = useState("");

  useEffect(() => {
    let userName = currentUser.login;
    setUserName(userName as string);
  }, []);

  return (
    <div className="flex h-full w-full justify-center gap-20 py-20 poppins">
      {/* repo */}
      <div className="glass-effect h-90vh w-half rounded-10">
        <ErrorBoundary>
          <DataTable active={active} setActive={setActive} />
        </ErrorBoundary>
      </div>
      {/* right */}
      <div className=" flex flex-col gap-19 ">
        {/* search */}
        <div className="">
          <ErrorBoundary>
            <SearchComponent selector={selector} setSelctor={setSelctor} />
          </ErrorBoundary>
        </div>
        {/* Profile */}
        <ErrorBoundary>
          <ProfileComponent active={active} setActive={setActive} />
        </ErrorBoundary>
      </div>
    </div>
  );
};

export default PrimaryUser;

// import { useEffect, useState } from "react";
// import { TSelector } from "../../types/types";
// import ErrorBoundary from "../errorBoundry/ErrorBoundry";
// import SearchComponent from "../search/SearchComponent";
// import ProfileComponent from "./ProfileComponent";
// import Repo from "./Repo";
// import useGetPrimaryUser from "../../hooks/useGetPrimaryUser";

// const PrimaryUser = ({ selector, setSelctor }: TSelector) => {
//   const currentUser = useGetPrimaryUser();
//   const [active, setActive] = useState(1);
//   const [user, setUser] = useState("primary");
//   const [userName, setUserName] = useState("");

//   useEffect(() => {
//     let userName = currentUser.login;
//     setUserName(userName as string);
//   }, []);

//   return (
//     <div className="flex h-full w-full justify-center gap-20 py-20 poppins">
//       {/* repo */}
//       <div className="glass-effect h-90vh w-half rounded-10">
//         <ErrorBoundary>
//           <Repo active={active} />
//         </ErrorBoundary>
//       </div>
//       {/* right */}
//       <div className=" flex flex-col gap-19 ">
//         {/* search */}
//         <div className="">
//           <ErrorBoundary>
//             <SearchComponent selector={selector} setSelctor={setSelctor} />
//           </ErrorBoundary>
//         </div>
//         {/* Profile */}
//         <ErrorBoundary>
//           <ProfileComponent active={active} setActive={setActive} />
//         </ErrorBoundary>
//       </div>
//     </div>
//   );
// };

// export default PrimaryUser;

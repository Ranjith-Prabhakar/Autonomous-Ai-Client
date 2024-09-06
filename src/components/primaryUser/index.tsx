import { TSelector } from "../../types/types";
import ErrorBoundary from "../errorBoundry/ErrorBoundry";
import SearchComponent from "../search/SearchComponent";
import ProfileComponent from "./ProfileComponent";

const PrimaryUser = ({ selector, setSelctor }: TSelector) => {
  return (
    <div className="flex h-full w-full justify-center gap-20 py-20 poppins">
      {/* repo */}
      <div className="glass-effect h-90vh w-half rounded-10">
        
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
          <ProfileComponent />
        </ErrorBoundary>
      </div>
    </div>
  );
};

export default PrimaryUser;

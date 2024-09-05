import "./App.css";
import { Toaster } from "react-hot-toast";
import ErrorBoundary from "./components/errorBoundry/ErrorBoundry";
import SearchComponent from "./components/search/SearchComponent";

const App = () => {
  return (
    <div className="app-container flex justify-center item-center ">
      <ErrorBoundary>
        <SearchComponent />
      </ErrorBoundary>
      <Toaster />
    </div>
  );
};

export default App;

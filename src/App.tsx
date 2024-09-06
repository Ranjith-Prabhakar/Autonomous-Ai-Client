import "./App.css";
import { Toaster } from "react-hot-toast";
import ErrorBoundary from "./components/errorBoundry/ErrorBoundry";
import SearchComponent from "./components/search/SearchComponent";
import { Provider } from "react-redux";
import store from "./redux/store";

const App = () => {
  return (
    <div className="app-container flex justify-center item-center ">
      <Provider store={store}>
        <ErrorBoundary>
          <SearchComponent />
        </ErrorBoundary>
      </Provider>
      <Toaster />
    </div>
  );
};

export default App;

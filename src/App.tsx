import "./App.css";
import { Toaster } from "react-hot-toast";
import ErrorBoundary from "./components/errorBoundry/ErrorBoundry";
import SearchComponent from "./components/search/SearchComponent";
import { Provider } from "react-redux";
import store from "./redux/store";
import PrimaryUser from "./components/primaryUser";
import { useState } from "react";



const App = () => {
  const [selector, setSelctor] = useState(1);
  return (
    <div className="app-container flex justify-center item-center ">
      <Provider store={store}>
        {selector === 1 ? (
          <ErrorBoundary>
            <div className="w-half">
            <SearchComponent setSelctor={setSelctor} />
            </div>
          </ErrorBoundary>
        ) : selector === 2 ? (
          <ErrorBoundary>
            <PrimaryUser selector={selector} setSelctor={setSelctor} />
          </ErrorBoundary>
        ) : null}
      </Provider>
      <Toaster />
    </div>
  );
};

export default App;

import React from "react";
import ReactDOM from "react-dom/client";
import {
  applyMiddleware,
  compose,
  legacy_createStore as createStore,
} from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { logger } from "./middlewares";
import App from "./App";
import "./index.css";
import rootReducer from "./reducers/rootReducer";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const composedEnhancers = compose(
  applyMiddleware(thunk, logger),
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(rootReducer, composedEnhancers);

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

import { createStore,applyMiddleware } from "redux";
import reducer from "../reducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "remote-redux-devtools";

export default function configureStore(initialState) {
  const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
  );

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require("../reducers/index").default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}

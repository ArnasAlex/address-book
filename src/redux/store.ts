import { applyMiddleware, compose, createStore } from "redux";
import { createLogicMiddleware } from "redux-logic";
import arrLogic from "./logic";
import reducers from "./reducers";

export default function configureStore() {
  const logicMiddleware = createLogicMiddleware(arrLogic as any);
  let composeEnhancers = compose;
  composeEnhancers =
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || composeEnhancers;

  const middleware = applyMiddleware(logicMiddleware);

  const store = createStore(reducers, composeEnhancers(middleware));
  return store;
}

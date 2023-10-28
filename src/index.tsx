import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navigation from './routes/Navigation';
import { Provider } from "react-redux";
import rootReducer from "./reducers/rootReducer";
import { applyMiddleware, compose, legacy_createStore as createStore } from "redux";
import { logger } from './middlewares/logger';
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

const altCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ as typeof compose || compose;

const composedEnhancers = altCompose(applyMiddleware(logger)) 

export const store = createStore(rootReducer, composedEnhancers)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Navigation />
    </Provider>
  </React.StrictMode>
);


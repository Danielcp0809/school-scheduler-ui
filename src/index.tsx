import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navigation from './routes/Navigation';
import { Provider } from "react-redux";
import rootReducer from "./reducers/rootReducer";
import { applyMiddleware, compose, legacy_createStore as createStore } from "redux";
import { logger } from './middlewares/logger';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

const altCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ as typeof compose || compose;

const persistConfig = {
  key: 'root',
  storage,
}

const composedEnhancers = altCompose(applyMiddleware(logger)) 
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer, composedEnhancers)
export const persistor = persistStore(store);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navigation />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);


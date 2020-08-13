import { createStore, applyMiddleware} from "redux";
import { generateReducers } from "./modules/rootReducer";
import { routerMiddleware } from "connected-react-router";
import thunk from 'redux-thunk';

import   { createBrowserHistory }  from "history";

export const history =  createBrowserHistory();

export const store = createStore(generateReducers(history), applyMiddleware(thunk));

export default store

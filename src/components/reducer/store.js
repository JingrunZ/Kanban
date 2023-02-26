import {createStore} from "redux";
//import {createLogger,applyMiddleware} from "redux-logger";
//import thunk from 'redux-thunk'
import rootReducers from "./index";

//const logger = createLogger();

const store = createStore(
    rootReducers,
    //applyMiddleware(thunk,logger)
    );

export default store;
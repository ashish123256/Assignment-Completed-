import {createStore, combineReducers,applyMiddleware} from "redux";
import {thunk} from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension"
import todosReducer from "./Redux/reducer/todosReducer";
import { tabsReducers } from "./Redux/reducer/tabsReducer";


const reducer = combineReducers({
    todos:todosReducer,
    currentTab :tabsReducers,
})

const middleware = [thunk];

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;
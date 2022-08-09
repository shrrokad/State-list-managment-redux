import { combineReducers } from "redux";
import { stateReducer } from "./reducer";

// Combine All Reducer In One 

const rootred = combineReducers({
    stateReducer
})

export default rootred
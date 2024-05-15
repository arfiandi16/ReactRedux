import { combineReducers } from "redux";
import notesReducers from "./notesReducers";


const rootReducer = combineReducers({
    notes : notesReducers,
});

export default rootReducer;
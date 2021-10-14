import { userReducer } from "./userReducer";
import { combineReducers } from "redux";
import Pagenation from "./PagenationReducer";
import LogReducer from "./LogReducer";



const AllRedcuer =
    combineReducers({
        userReducer, Pagenation, LogReducer
    })


export default AllRedcuer;
import { userReducer } from "./userReducer";
import { combineReducers } from "redux";



const AllRedcuer =
    combineReducers({
        userReducer
    })


export default AllRedcuer;
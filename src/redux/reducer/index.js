import { userReducer } from "./userReducer";
import { combineReducers } from "redux";
import Pagenation from "./PagenationReducer";



const AllRedcuer =
    combineReducers({
        userReducer, Pagenation
    })


export default AllRedcuer;
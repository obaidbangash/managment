import { ERROR, LOADING, SUCCESS } from "../Type";
const initialState = {
    Loading: false,
    User: [],
    error: "",
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADING:
            return {
                ...state,
                Loading: true,

            }
        case SUCCESS:
            console.log("action.payload", action);
            return {
                ...state,
                Loading: false,
                User: action.payload,
                error: ""
            }

        case ERROR:
            return {
                ...state,
                Loading: false,
                User: [],
                error: action.payload
            }

        default:
            return state

    }
}
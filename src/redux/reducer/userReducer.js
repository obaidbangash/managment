import { ERROR, LOADING, SIGNUP_SUCCESS, SIGNIN_SUCCESS, GETUSER, CREATE_USER, DELETE_USER, UPDATE_USER } from "../Type";
const initialState = {
    Loading: false,
    User: null,
    error: "",
    users: [],
    token: '',
    updateUser: []
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADING:
            return {
                ...state,
                Loading: true,

            }
        case SIGNUP_SUCCESS:
            return {
                ...state,
                Loading: false,
                User: action.payload,
                error: ""
            }
        case SIGNIN_SUCCESS:
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
        case GETUSER:
            return {
                ...state,
                Loading: false,
                users: action.payload,
                error: "",
            }
        case CREATE_USER:
            return {
                ...state,
                Loading: false,
                users: action.payload,
                error: "",
            }
        case DELETE_USER:
            return {
                ...state,
                Loading: false,
                users: action.payload,
                error: "",
            }
        case UPDATE_USER:
            return {
                ...state,
                Loading: false,
                updateUser: action.payload,
                error: "",
            }
        case "TOKEN":
            return {
                ...state,
                token: action.token
            }
        default:
            return state

    }
}
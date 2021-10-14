import { ERROR, LOADING, SIGNUP_SUCCESS, SIGNIN_SUCCESS, GETUSER, CREATE_USER, DELETE_USER, UPDATE_USER } from "../Type";
const initialState = {
    Loading: false,
    User: null,
    error: "",
    users: [],
    token: '',
    updateUser: [],
    UserError: "",
    DeleteError: "",
    UpdateError: "",
    GetUserError: "",
    role: "",
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADING:
            return {
                ...state,
                Loading: true,

            }
        // sign up 
        case SIGNUP_SUCCESS:
            return {
                ...state,
                Loading: false,
                User: action.payload,
                error: ""
            }
        // sign in 
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
        // get users
        case GETUSER:
            return {
                ...state,
                Loading: false,
                users: action.payload,
                error: "",
            }
        case "GET_USER_ERROR":
            return {
                ...state,
                GetUserError: action.payload,
            }
        // create users
        case CREATE_USER:
            return {
                ...state,
                Loading: false,
                users: action.payload,
                error: "",
            }
        case "CREATE_USER_ERROR":
            return {
                ...state,
                UserError: action.payload
            }
        // delete users
        case DELETE_USER:
            return {
                ...state,
                Loading: false,
                users: action.payload,
                error: "",
            }

        case "DELETE_ERROR":
            return {
                ...state,
                DeleteError: action.payload
            }
        // update users
        case UPDATE_USER:
            return {
                ...state,
                Loading: false,
                updateUser: action.payload,
                error: "",
            }
        case "UPDATE_ERROR":
            return {
                ...state,
                UpdateError: action.payload
            }
        case "TOKEN":
            return {
                ...state,
                token: action.token
            }
        case "ROLE":
            return {
                ...state,
                role: action.role
            }

        default:
            return state

    }
}
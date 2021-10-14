const initialState = {
    Loading: false,
    log: [],
    error: "",
    logData: [],
    getLogError: ""
}
const LogReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOADING":
            return {
                ...state,
                Loading: true,
            }
        case "POST_SUCCESS":
            return {
                ...state,
                Loading: false,
                log: action.payload,
            }
        case "POST_ERROR":
            return {
                ...state,
                error: action.payload
            }
        // get log data
        case "GET_LOG_LOADING":
            return {
                ...state,
                Loading: true,
            }
        case "GET_LOG_SUCCESS":
            return {
                ...state,
                Loading: false,
                logData: action.payload,
            }
        case "GET_LOG_ERROR":
            return {
                ...state,
                error: action.payload
            }

        // log edit
        case "UPDATE_LOADING":
            return {
                ...state,
                Loading: true,
            }
        case "UPDATE_LOG_SUCCESS":
            return {
                ...state,
                Loading: false,
                logData: action.payload,
            }
        case "UPDATE_LOG_ERROR":
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}
export default LogReducer
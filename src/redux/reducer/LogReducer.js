const initialState = {
    Loading: false,
    log: [],
    error: "",
    logData: [],
    getLogError: "",
    logId: undefined,
    PerferedHours: {},
    PatchError: "",
    deleteLogError: "",
    filterError: ""
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
        case "LOG_ID":
            return {
                ...state,
                logId: action.payload
            }
        // perfered hours

        case "PATCH_ERROR":
            return {
                ...state,
                PatchError: action.payload
            }
        // delete logs
        case "DELETE_LOG_SUCCESS":
            return {
                ...state,
                logData: action.payload,
            }
        case "DELETE_LOG_ERROR":
            return {
                ...state,
                deleteLogError: action.payload
            }
        // filter reducer
        case "FILTER_SUCCESS":
            return {
                ...state,
                logData: action.payload,
            }
        case "FILTER_ERROR":
            return {
                ...state,
                filterError: action.payload
            }

        default:
            return state
    }
}
export default LogReducer
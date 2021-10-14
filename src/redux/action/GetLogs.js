import axios from "axios";
export const GetLogLoading = () => {
    return {
        type: "GET_LOG_LOADING"
    }
}
export const GetLogSuccess = (user) => {
    return {
        type: "GET_LOG_SUCCESS",
        payload: user
    }
}
export const GetLogError = (error) => {
    return {
        type: "GET_LOG_ERROR",
        payload: error
    }
}


export const GetLogData = (token) => {
    return (dispatch) => {
        dispatch(GetLogLoading())
        axios.get('http://34.210.129.167/api/work-logs', {
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                "Authorization": `Bearer ${token}`
            },
        })
            .then((res) => {
                dispatch(GetLogSuccess(res.data.workLogs))
            })
            .catch(error => {
                dispatch(GetLogError(error.response?.data))
            })
    }
}
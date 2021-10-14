import axios from "axios";

const Loading = () => {
    return {
        type: "LOADING"
    }
}

const LogsSuccess = (log) => {
    return {
        type: "POST_SUCCESS",
        payload: log,
    }
}

const PostError = (error) => {
    return {
        type: "POST_ERROR",
        payload: error
    }
}

export const PostLogs = (state, token) => {
    return (dispatch) => {
        dispatch(Loading())
        axios.post(`http://34.210.129.167/api/work-logs`,
            state, {
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                "Authorization": `Bearer ${token}`
            },
        }).then((res) => {
            console.log(res)
            dispatch(LogsSuccess(res.data))
        })
            .catch(error => {
                dispatch(PostError(error.response?.data))
            })
    }
}
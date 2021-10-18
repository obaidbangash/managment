import axios from "axios";

const Loading = () => {
    return {
        type: "LOADING",
    }
}

const DeleteLog = (user) => {
    return {
        type: "DELETE_LOG_SUCCESS",
        payload: user
    }
}
const DeleteError = (error) => {
    return {
        type: "DELETE_LOG_ERROR",
        payload: error

    }
}

export const DeleteWorkLogs = (id) => {
    const token = sessionStorage.getItem('token')
    return (dispatch) => {
        dispatch(Loading())
        axios.delete(`http://34.210.129.167/api/work-logs/${id}`, {
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                "Authorization": `Bearer ${token}`
            }
        })
            .then((res) => {
                dispatch(DeleteLog(res.data))
            })
            .catch(error => {
                dispatch(DeleteError(error.message))
            })
    }
}
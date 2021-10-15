import axios from "axios";
export const EditLoading = () => {
    return {
        type: "UPDATE_LOADING"
    }
}
export const UpdateLog = (logData) => {
    return {
        type: "UPDATE_LOG_SUCCESS",
        payload: logData
    }
}
export const UpdateLogError = (error) => {
    return {
        type: "UPDATE_LOG_ERROR",
        payload: error
    }
}
export const EditLogId = (id) => {
    return {
        type: "EDIT_LOG_ID",
        payload: id
    }
}

export const Update_Logs = (id, state, token) => {
    return (dispatch) => {
        dispatch(EditLoading())
        id == undefined ? axios.put(`http://34.210.129.167/api/work-logs/${state.id}`, state, {
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                "Authorization": `Bearer ${token}`
            },
        }) : axios.put(`http://34.210.129.167/api/user/${id}/work-logs/${state.id}`, state, {
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                "Authorization": `Bearer ${token}`
            },
        })
            .then((res) => {
                console.log(res, "response update")
                dispatch(UpdateLog(res.data))
            })
            .catch(error => {
                console.log(error.message, "error")
                dispatch(UpdateLogError(error.response?.data))
            })
    }
}
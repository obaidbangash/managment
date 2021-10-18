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
// get logs
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

export const setLogID = (id) => {
    return {
        type: "LOG_ID",
        payload: id
    }
}
// edit logs
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
// work log filter
const FilterSuccess = (data) => {
    return {
        type: "GET_LOG_SUCCESS",
        payload: { data }
    }
}

const FilterError = (error) => {
    return {
        type: "FILTER_ERROR",
        payload: error
    }
}

export const FilterLogs = (from, to) => {
    console.log(from, to)
    const token = sessionStorage.getItem("token")
    return (dispatch) => {
        dispatch(Loading())
        axios.get(`http://34.210.129.167/api/work-logs/${from}/${to}`, {
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                "Authorization": `Bearer ${token}`
            },
        })
            .then((res) => {
                dispatch(FilterSuccess(res.data.workLogs));
            })
            .catch(error => {
                dispatch(FilterError(error.response?.data))
            })
    }
}
// prefered hrs
const PatchLoading = () => {
    return {
        type: "LOADING",

    }
}

const PatchError = (error) => {
    return {
        type: "PATCH_ERROR",
        payload: error

    }
}
// delete logs

const DeleteLog = (user) => {
    return {
        type: "GET_LOG_SUCCESS",
        payload: user
    }
}
const DeleteError = (error) => {
    return {
        type: "DELETE_LOG_ERROR",
        payload: error

    }
}
// get logs


export const GetLogData = (token) => {
    return (dispatch) => {
        dispatch(Loading())
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
// delete 
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

// create logs
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

// edit logs


export const Update_Logs = (id, state, token) => {
    return (dispatch) => {
        dispatch(Loading())
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
                dispatch(UpdateLog(res.data.workLogs))
            })
            .catch(error => {
                dispatch(UpdateLogError(error.response?.data))
            })
    }
}


// if specific as a admin we get logs
export const GetSpecLogData = (id, token) => {
    return (dispatch) => {
        dispatch(Loading())
        axios.get(`http://34.210.129.167/api/user/${id}/work-logs`, {
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                "Authorization": `Bearer ${token}`
            },
        })
            .then((res) => {
                dispatch(GetLogSuccess(res.data.workLogs));
            })
            .catch(error => {
                dispatch(GetLogError(error.response?.data))
            })
    }
}
// prefered hrs
export const PatchGet = (workingHours) => {
    const token = sessionStorage.getItem("token");
    const id = sessionStorage.getItem("id");
    return (dispatch) => {
        dispatch(Loading())
        axios.patch(`http://34.210.129.167/api/users/${id}/preferred-working-hours`,
            {
                workingHours: `${workingHours}`,
            }, {
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                "Authorization": `Bearer ${token}`
            },
        }).then((res) => {

        })
            .catch(error => {
                dispatch(PatchError(error))
            })
    }
}
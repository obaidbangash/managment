import axios from "axios";

const Loading = () => {
    return {
        type: "LOADING"
    }
}
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


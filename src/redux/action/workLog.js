export const fetch_workLog = (token, page) => (dispatch) => {

    console.log("inside Fetch");
    fetch(`http://34.210.129.167/api/work-logs?page=${page}`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            Authorization: `Bearer ${token}`
        },
    })
        .then((json) => json.json())
        .then((response) => dispatch(set_workLog(response.workLogs)))
        .then((response) => console.log("check get worklog last_page", response))
        .catch((err) => console.log(err))
}


export const set_workLog = (data) => {
    return {
        type: "SET_WORKLOG",
        workLog: data.data,
        pages: data.last_page
    }
}

export const set_worklog_page = (page) => {
    return {
        type: "SET_WORK_PAGE",
        page
    }
}
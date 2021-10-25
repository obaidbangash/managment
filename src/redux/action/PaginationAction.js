const get_user = (data) => {
    return {
        type: "SET_USERS",
        users: data.data,
        pages: data.last_page
    }
}
export const set_page = (page) => {
    return {
        type: "SET_PAGE",
        page
    }
}

export const getAllData = (token, page) => (dispatch) => {
    fetch(`http://34.210.129.167/api/users?page=${page}`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            Authorization: `Bearer ${token}`
        },
    })
        .then((json) => json.json())
        .then((response) => {
            dispatch(get_user(response.users))
        })
        .catch((err) => console.log(err))
}
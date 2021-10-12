import axios from "axios";
import { LOADING, ERROR, UPDATE_USER } from "../Type";
export const PostLoading = () => {
    return {
        type: LOADING
    }
}

export const UpdateSuccess = (user) => {
    return {
        type: UPDATE_USER,
        payload: user
    }
}
export const PostError = (error) => {
    return {
        type: ERROR,
        payload: error
    }
}


export const setToken = (token) => {
    return {
        type: "TOKEN",
        token
    }
}
export const initToken = () => {
    const token = sessionStorage.getItem("token");
    return {
        type: "TOKEN",
        token: token === 'undefined' ? undefined : token
    }
}



export const UpdateUser = (state, id, token) => {
    return (dispatch) => {
        dispatch(PostLoading())
        axios.put(`http://34.210.129.167/api/users/${id}`, state, {
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                "Authorization": `Bearer ${token}`,
            }
        })
            .then((res) => {
                console.log(id);
                dispatch(UpdateSuccess(res.data.users.data))
            })
            .catch(error => {
                console.log(error.message);
                dispatch(PostError(error.message))
            })
    }
}
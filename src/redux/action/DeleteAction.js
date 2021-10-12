import axios from "axios";
import { LOADING, DELETE_SUCCESS, ERROR, } from "../Type";
export const PostLoading = () => {
    return {
        type: LOADING
    }
}

export const DeleteSuccess = (user) => {
    return {
        type: DELETE_SUCCESS,
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

export const DeleteUser = (token, id) => {
    return (dispatch) => {
        dispatch(PostLoading())
        axios.delete(`http://34.210.129.167/api/users/${id}`, {
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                "Authorization": `Bearer ${token}`
            }
        })
            .then((res) => {
                dispatch(DeleteSuccess(res.data.users.data))
            })
            .catch(error => {
                dispatch(PostError(error.message))
            })
    }
}



import axios from "axios";
import { LOADING, DELETE_USER } from "../Type";
export const PostLoading = () => {
    return {
        type: LOADING
    }
}

export const DeleteSuccess = (user) => {
    return {
        type: DELETE_USER,
        payload: user
    }
}
export const Delete_Error = (error) => {
    return {
        type: "DELETE_ERROR",
        payload: error
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
                dispatch(Delete_Error(error.message))
            })
    }
}
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
export const UpdateError = (error) => {
    return {
        type: "UPDATE_ERROR",
        payload: error
    }
}

export const UpdateUser = (state,) => {
    const token = sessionStorage.getItem("token");
    return (dispatch) => {
        dispatch(PostLoading())
        axios.put(`http://34.210.129.167/api/users/${state.id}`, state, {
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                "Authorization": `Bearer ${token}`,
            }
        })
            .then((res) => {
                dispatch(UpdateSuccess(res.data.users.data))
            })
            .catch(error => {

                dispatch(UpdateError(error.message))
            })
    }
}

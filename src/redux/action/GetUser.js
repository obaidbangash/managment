import axios from "axios";
import { LOADING, GETUSER } from "../Type";
export const PostLoading = () => {
    return {
        type: LOADING
    }
}


export const GetSuccess = (users) => {
    return {
        type: GETUSER,
        payload: users
    }
}
export const GetUserError = (error) => {
    return {
        type: "GET_USER_ERROR",
        payload: error
    }
}


export const getUsers = (token) => {
    return (dispatch) => {
        dispatch(PostLoading())
        axios.get('http://34.210.129.167/api/users', {
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                "Authorization": `Bearer ${token}`
            }
        })
            .then((res) => {
                // console.log(res.data.users.data);
                dispatch(GetSuccess(res.data.users.data))
            })
            .catch(error => {
                dispatch(GetUserError(error.message))
            })
    }
}



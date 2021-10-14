import axios from "axios";
import { LOADING, CREATE_USER } from "../Type";
export const PostLoading = () => {
    return {
        type: LOADING
    }
}
export const Create_user = (user) => {
    return {
        type: CREATE_USER,
        payload: user.user
    }
}
export const Create_user_Error = (error) => {
    return {
        type: "CREATE_USER_ERROR",
        payload: error
    }
}


export const Createusers = (state, token) => {
    return (dispatch) => {
        dispatch(PostLoading())
        axios.post('http://34.210.129.167/api/users', state, {
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                "Authorization": `Bearer ${token}`
            },
        })
            .then((res) => {
                console.log(res)
                dispatch(Create_user(res.data))
            })
            .catch(error => {
                dispatch(Create_user_Error(error.response?.data))
            })
    }
}
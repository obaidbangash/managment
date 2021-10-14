import axios from "axios";
import { LOADING, SIGNUP_SUCCESS, ERROR } from "../Type";
export const PostLoading = () => {
    return {
        type: LOADING
    }
}

export const PostSuccess = (user) => {
    return {
        type: SIGNUP_SUCCESS,
        payload: user.user
    }
}


export const PostError = (error) => {
    return {
        type: ERROR,
        payload: error
    }
}


export const fetchPost = (state, history) => {
    return (dispatch) => {
        dispatch(PostLoading())
        axios.post('http://34.210.129.167/api/register', state, {
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((res) => {
                // console.log(res)
                dispatch(PostSuccess(res.data))
                history.push('/sign-in')
            })
            .catch(error => {
                dispatch(PostError(error.response?.data))
            })
    }
}
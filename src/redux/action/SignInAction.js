import axios from "axios";
import { LOADING, SIGNIN_SUCCESS, ERROR } from "../Type";
export const PostLoading = () => {
    return {
        type: LOADING
    }
}

export const Sign_Success = (user) => {
    return {
        type: SIGNIN_SUCCESS,
        payload: user.user
    }
}


export const PostError = (error) => {
    return {
        type: ERROR,
        payload: error
    }
}


export const fetchIn = (state, history) => {
    return (dispatch) => {
        dispatch(PostLoading())
        axios.post('http://34.210.129.167/api/login', state, {
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((res) => {
                sessionStorage.setItem("token", res.data.token)
                dispatch(Sign_Success(res.data))
                dispatch(setToken(res.data.token));
                history.push('/')
            })
            .catch(error => {
                dispatch(PostError(error.response?.data))
            })
    }
}


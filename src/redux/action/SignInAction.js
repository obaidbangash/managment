import axios from "axios";
import { LOADING, SIGNIN_SUCCESS, ERROR } from "../Type";
export const PostLoading = () => {
    return {
        type: LOADING
    }
}

export const postSignIn = (user) => {
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

export const setToken = (token) => {
    return {
        type: "TOKEN",
        token
    }
}
// init token
export const initToken = () => {
    const token = sessionStorage.getItem("token");
    return {
        type: "TOKEN",
        token: token === 'undefined' ? undefined : token
    }
}
export const setRole = (role) => {
    // const role = sessionStorage.getItem("role");
    return {
        type: "ROLE",
        role

    }
}
// sign out 
export const SignOut = () => {
    sessionStorage.removeItem("token");
    return {
        type: "SIGN_OUT",
        token: null
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
                console.log(res)
                sessionStorage.setItem("token", res.data.token)
                sessionStorage.setItem("name", res.data.user.firstName)
                sessionStorage.setItem("email", res.data.user.email)
                sessionStorage.setItem("role", res.data.user.roles[0].name)
                sessionStorage.setItem("id", res.data.user.id);
                dispatch(setRole(res?.data?.user?.roles[0]?.name))
                dispatch(postSignIn(res.data))
                dispatch(setToken(res.data.token));
                history.push('/')
            })
            .catch(error => {
                dispatch(PostError(error.response?.data))
            })
    }
}
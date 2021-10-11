import axios from "axios";
import { LOADING, SUCCESS, ERROR } from "../Type";
export const PostLoading = () => {
    return {
        type: LOADING
    }
}

export const PostSuccess = (user) => {
    return {
        type: SUCCESS,
        payload: user
    }
}
export const PostError = (error) => {
    return {
        type: ERROR,
        payload: error
    }
}


export const fetchPost = (state) => {
    return (dispatch) => {
        dispatch(PostLoading())
        fetch('http://34.210.129.167/api/register', {
            method: 'POST',
            body: JSON.stringify(state),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            // .then((json) => console.log(json));
            .then((json) => dispatch(PostSuccess(json)))
            .catch(error => dispatch(PostError(error.message)))
    }
}

export const fetchIn = (state) => {
    return (dispatch) => {
        dispatch(PostLoading())
        fetch('http://34.210.129.167/api/login', {
            method: 'POST',
            body: JSON.stringify(state),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                const { token } = json;
                if (typeof token !== "undefined") {
                    sessionStorage.setItem("token", token);
                }
                dispatch(PostSuccess(json))
            })
            // .then((json) => dispatch(PostSuccess(json)))
            .catch(error => dispatch(PostError(error.message)))
    }
}
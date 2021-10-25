







import axios from "axios";
import { LOADING, ERROR, UPDATE_USER, CREATE_USER, SIGNUP_SUCCESS, SIGNIN_SUCCESS, DELETE_USER, GETUSER } from "../Type";
// sign up action
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
// sign in 
export const signLoading = () => {
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


export const setToken = (token) => {
    return {
        type: "TOKEN",
        token
    }
}
// create new user

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
// update users


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
// delete user


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
// get users
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
// update user
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

// sign up action



export const fetchPost = (state, history) => {
    return (dispatch) => {
        dispatch(PostLoading())
        axios.post('http://34.210.129.167/api/register', state, {
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((res) => {
                dispatch(PostSuccess(res.data))
                history.push('/sign-in')
            })
            .catch(error => {
                dispatch(PostError(error.response?.data))
            })
    }
}
// sign in 

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
// create new user


// signup 
export const fetchIn = (state, history) => {
    return (dispatch) => {
        dispatch(signLoading())
        axios.post('http://34.210.129.167/api/login', state, {
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((res) => {
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

// create new user



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
                dispatch(Create_user(res.data))
            })
            .catch(error => {
                dispatch(Create_user_Error(error.response?.data))
            })
    }
}

// delete user
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

// get users

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
                dispatch(GetSuccess(res.data.users.data))
            })
            .catch(error => {
                dispatch(GetUserError(error.message))
            })
    }
}
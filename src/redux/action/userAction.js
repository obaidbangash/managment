// import axios from "axios";
// import { LOADING, SIGNUP_SUCCESS, SIGNIN_SUCCESS, ERROR, GETUSER, DELETE_USER, CREATE_USER, UPDATE_USER } from "../Type";
// export const PostLoading = () => {
//     return {
//         type: LOADING
//     }
// }
// sign up
// export const PostSuccess = (user) => {
//     return {
//         type: SIGNUP_SUCCESS,
//         payload: user.user
//     }
// }
// sign In
// export const postSignIn = (user) => {
//     return {
//         type: SIGNIN_SUCCESS,
//         payload: user.user
//     }
// }
// create new user
// export const Create_user = (user) => {
//     return {
//         type: CREATE_USER,
//         payload: user.user
//     }
// }
// export const Create_user_Error = (error) => {
//     return {
//         type: "CREATE_USER_ERROR",
//         payload: error
//     }
// }
// getting created  users from api
// export const GetSuccess = (users) => {
//     return {
//         type: GETUSER,
//         payload: users
//     }
// }
// export const GetUserError = (error) => {
//     return {
//         type: "GET_USER_ERROR",
//         payload: error
//     }
// }

// error
// export const PostError = (error) => {
//     return {
//         type: ERROR,
//         payload: error
//     }
// }
// delete user
// export const DeleteSuccess = (user) => {
//     return {
//         type: DELETE_USER,
//         payload: user
//     }
// }
// export const Delete_Error = (error) => {
//     return {
//         type: "DELETE_ERROR",
//         payload: error
//     }
// }
// update user
// export const UpdateSuccess = (user) => {
//     return {
//         type: UPDATE_USER,
//         payload: user
//     }
// }
// export const UpdateError = (error) => {
//     return {
//         type: "UPDATE_ERROR",
//         payload: error
//     }
// }
// token 
// export const setToken = (token) => {
//     return {
//         type: "TOKEN",
//         token
//     }
// }
// // init token
// export const initToken = () => {
//     const token = sessionStorage.getItem("token");
//     return {
//         type: "TOKEN",
//         token: token === 'undefined' ? undefined : token
//     }
// }

// export const fetchPost = (state, history) => {
//     return (dispatch) => {
//         dispatch(PostLoading())
//         axios.post('http://34.210.129.167/api/register', state, {
//             headers: {
//                 'Content-type': 'application/json; charset=UTF-8',
//             },
//         })
//             .then((res) => {
//                 // console.log(res)
//                 dispatch(PostSuccess(res.data))
//                 history.push('/sign-in')
//             })
//             .catch(error => {
//                 dispatch(PostError(error.response?.data))
//             })
//     }
// }

// export const fetchIn = (state, history) => {
//     console.log(state, "sattttttt")
//     return (dispatch) => {
//         dispatch(PostLoading())
//         axios.post('http://34.210.129.167/api/login', state, {
//             headers: {
//                 'Content-type': 'application/json; charset=UTF-8',
//             },
//         })
//             .then((res) => {
//                 sessionStorage.setItem("token", res.data.token)
//                 sessionStorage.setItem("role", res.data.roles[0].name)
//                 dispatch(postSignIn(res.data))
//                 dispatch(setToken(res.data.token));
//                 history.push('/')
//             })
//             .catch(error => {
//                 dispatch(PostError(error.response?.data))
//             })
//     }
// }

// export const Createusers = (state, token) => {
//     return (dispatch) => {
//         dispatch(PostLoading())
//         axios.post('http://34.210.129.167/api/users', state, {
//             headers: {
//                 'Content-type': 'application/json; charset=UTF-8',
//                 "Authorization": `Bearer ${token}`
//             },
//         })
//             .then((res) => {
//                 console.log(res)
//                 dispatch(Create_user(res.data))
//             })
//             .catch(error => {
//                 dispatch(Create_user_Error(error.response?.data))
//             })
//     }
// }

// export const getUsers = (token) => {
//     return (dispatch) => {
//         dispatch(PostLoading())
//         axios.get('http://34.210.129.167/api/users', {
//             headers: {
//                 'Content-type': 'application/json; charset=UTF-8',
//                 "Authorization": `Bearer ${token}`
//             }
//         })
//             .then((res) => {
//                 // console.log(res.data.users.data);
//                 dispatch(GetSuccess(res.data.users.data))
//             })
//             .catch(error => {
//                 dispatch(GetUserError(error.message))
//             })
//     }
// }


// export const DeleteUser = (token, id) => {
//     return (dispatch) => {
//         dispatch(PostLoading())
//         axios.delete(`http://34.210.129.167/api/users/${id}`, {
//             headers: {
//                 'Content-type': 'application/json; charset=UTF-8',
//                 "Authorization": `Bearer ${token}`
//             }
//         })
//             .then((res) => {
//                 dispatch(DeleteSuccess(res.data.users.data))
//             })
//             .catch(error => {
//                 dispatch(Delete_Error(error.message))
//             })
//     }
// }


// export const UpdateUser = (state,) => {
//     const token = sessionStorage.getItem("token");
//     return (dispatch) => {
//         dispatch(PostLoading())
//         axios.put(`http://34.210.129.167/api/users/${state.id}`, state, {
//             headers: {
//                 'Content-type': 'application/json; charset=UTF-8',
//                 "Authorization": `Bearer ${token}`,
//             }
//         })
//             .then((res) => {
//                 dispatch(UpdateSuccess(res.data.users.data))
//             })
//             .catch(error => {

//                 dispatch(UpdateError(error.message))
//             })
//     }
// }



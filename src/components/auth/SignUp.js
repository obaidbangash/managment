import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { fetchPost } from '../../redux/action/userAction';
// import { useReducer } from 'react';

function SignUp({ setLogin, setActive }) {
    const dispatch = useDispatch();
    // const user = useSelector(state => state.userReducer.User);
    const loading = useSelector(state => state.userReducer.loading);
    const error = useSelector(state => state.userReducer.error);
    const history = useHistory();

    const dataObj = { firstName: "", lastName: "", email: "", password: "", password_confirmation: "" }
    const [userData, setUserData] = useState(dataObj);
    const [valid, setValid] = useState(false)

    const formHandler = (e) => {
        e.preventDefault();
        if (userData.firstName.length < 1 || userData.lastName.length < 1 || userData.email.length < 1 || userData.password.length < 1 || userData.password_confirmation.length < 1) {
            setValid(true);
            // dispatch(fetchPost(userData))

        } else if (!error) {
            setActive(true)
        }
        else {
            setValid(false);
            dispatch(fetchPost(userData, history))
            setUserData(dataObj);
        }
    }
    return (
        <div className="form-container sign-up-container">
            <form>
                <h1>Create Account</h1>
                <div className="social-container">
                    <a href="#" className="social"><i className="fa fa-facebook-f"></i></a>
                    <a href="#" className="social"><i className="fa fa-google"></i></a>
                    <a href="#" className="social"><i className="fa fa-linkedin"></i></a>
                </div>
                <span className="useAcount">or use your email for registration</span>
                <div className="form-group">
                    <input type="text" value={userData.firstName} placeholder="First name" onChange={(e) => {
                        const data = { ...userData };
                        data.firstName = e.target.value;
                        setUserData(data)
                    }} />
                    {
                        valid && userData.firstName == "" ? <span className="text-danger error-span py-2">The First Name Can Not Be Blank.</span> : null
                    }
                </div>

                <div className="form-group">
                    <input type="text" value={userData.lastName} placeholder="Last name" onChange={(e) => {
                        const data = { ...userData };
                        data.lastName = e.target.value;
                        setUserData(data)
                    }} />
                    {
                        valid && userData.lastName == "" ? <span className="text-danger error-span py-2">The Last Name Can Not Be Blank.</span> : null
                    }
                </div>

                <div className="form-group">
                    <input type="email" value={userData.email} placeholder="Enter email" onChange={(e) => {
                        const data = { ...userData };
                        data.email = e.target.value;
                        setUserData(data)
                    }} />
                    {
                        valid && userData.email == "" ? <span className="text-danger error-span py-2">The Email Can Not Be Blank.</span> : null
                    }
                </div>

                <div className="form-group">
                    <input type="password" value={userData.password} placeholder="Enter password" onChange={(e) => {
                        const data = { ...userData };
                        data.password = e.target.value;
                        setUserData(data)
                    }} />
                    {
                        valid && userData.password == "" ? <span className="text-danger error-span py-2">The Password Can Not Be Blank.</span> : null
                    }
                </div>
                <div className="form-group">
                    <input type="password" value={userData.password_confirmation} placeholder="Confirm password" onChange={(e) => {
                        const data = { ...userData };
                        data.password_confirmation = e.target.value;
                        setUserData(data)
                    }} />
                    {
                        valid && userData.password_confirmation == "" ? <span className="text-danger error-span py-2">The Password Can Not Be Blank.</span> : null
                    }
                </div>
                <button onClick={(e) => formHandler(e)}>Sign Up</button>
                <div className="text-start mt-2">{Array.isArray(error) ? error?.map(item => <p key={item} className="text-danger m-0 text-start">{item}</p>) : error.message}</div>
            </form>
        </div>
    )
}

export default SignUp

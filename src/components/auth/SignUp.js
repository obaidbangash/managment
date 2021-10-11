import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { fetchPost } from '../../redux/action/userAction';
// import { useReducer } from 'react';

function SignUp() {
    const dispatch = useDispatch();
    const user = useSelector(state => state.userReducer.User);
    const loading = useSelector(state => state.userReducer.loading);
    // const error = useSelector(state => state.userReducer.error);
    // console.log(user[0])



    const dataObj = { firstName: "", lastName: "", email: "", password: "", password_confirmation: "" }
    const [userData, setUserData] = useState(dataObj);
    const [valid, setValid] = useState(false)

    const formHandler = (e) => {
        e.preventDefault();

        // console.log(userData);
        if (userData.firstName.length < 1 || userData.lastName.length < 1 || userData.email.length < 1 || userData.password.length < 1 || userData.password_confirmation.length < 1) {
            setValid(true);
            // dispatch(fetchPost(userData))

        } else {
            setValid(false);
            console.log(userData)
            dispatch(fetchPost(userData))
            setUserData(dataObj)

        }
    }
    return (
        <div className="auth-wrapper">
            <div className="auth-inner">
                <form>
                    <h3>Sign Up</h3>

                    <div className="form-group">
                        <label>First name</label>
                        <input type="text" className="form-control" value={userData.firstName} placeholder="First name" onChange={(e) => {
                            const data = { ...userData };
                            data.firstName = e.target.value;
                            setUserData(data)
                        }} />
                        {
                            valid && userData.firstName == "" ? <span className="text-danger error-span py-2">The First Name Can Not Be Blank.</span> : null
                        }
                    </div>

                    <div className="form-group">
                        <label>Last name</label>
                        <input type="text" className="form-control" value={userData.lastName} placeholder="Last name" onChange={(e) => {
                            const data = { ...userData };
                            data.lastName = e.target.value;
                            setUserData(data)
                        }} />
                        {
                            valid && userData.lastName == "" ? <span className="text-danger error-span py-2">The Last Name Can Not Be Blank.</span> : null
                        }
                    </div>

                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" className="form-control " value={userData.email} placeholder="Enter email" onChange={(e) => {
                            const data = { ...userData };
                            data.email = e.target.value;
                            setUserData(data)
                        }} />
                        {
                            valid && userData.email == "" ? <span className="text-danger error-span py-2">The Email Can Not Be Blank.</span> : null
                        }
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" value={userData.password} placeholder="Enter password" onChange={(e) => {
                            const data = { ...userData };
                            data.password = e.target.value;
                            setUserData(data)
                        }} />
                        {
                            valid && userData.password == "" ? <span className="text-danger error-span py-2">The Password Can Not Be Blank.</span> : null
                        }
                    </div>
                    <div className="form-group">
                        <label>Confirm Password</label>
                        <input type="password" className="form-control" value={userData.password_confirmation} placeholder="Confirm password" onChange={(e) => {
                            const data = { ...userData };
                            data.password_confirmation = e.target.value;
                            setUserData(data)
                        }} />
                        {
                            valid && userData.password_confirmation == "" ? <span className="text-danger error-span py-2">The Password Can Not Be Blank.</span> : null
                        }
                    </div>
                    <button onClick={(e) => formHandler(e)} className="btn btn-primary btn-block">Sign Up</button>

                    <p className="forgot-password text-right">
                        Already registered <Link to="/sign-in">Sign in?</Link>
                    </p>
                    {user ? user?.map(item => <p key={item} className="text-danger">{item}</p>) : null}
                </form>
            </div>
        </div>
    )
}

export default SignUp

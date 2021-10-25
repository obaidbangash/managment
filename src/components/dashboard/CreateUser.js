import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";

import { Createusers, getUsers } from '../../redux/action/userAction';
function CreateUser({ setCreateUser }) {
    const formError = useSelector(state => state.userReducer.UserError);
    // dispatch 
    const dispatch = useDispatch();
    // getting token copy
    let token = sessionStorage.getItem("token");
    // initial data
    const dataObj = { firstName: "", lastName: "", email: "", password: "", password_confirmation: "", userType: "user" }
    // state for userdata
    const [userData, setUserData] = useState(dataObj);
    // state for validation
    const [valid, setValid] = useState(false)
    // function for create user button
    const formHandler = (e) => {
        e.preventDefault();
        if (userData.firstName.length < 1 || userData.lastName.length < 1 || userData.email.length < 1 || userData.password.length < 1 || userData.password_confirmation.length < 1) {
            setValid(true);
        } else {
            setValid(false);
            dispatch(Createusers(userData, token))
            setUserData(dataObj);
            dispatch(getUsers(token))
            setCreateUser(false)
        }
    }
    return (
        <>
            <div className="auth-wrapper create-user">

                <div className="auth-inner">
                    <i className="fa fa-close close-btn" onClick={() => setCreateUser(false)}> </i>
                    <form>
                        <h3>Create User</h3>

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
                        <button onClick={(e) => formHandler(e)} className="btn btn-primary btn-block">Create User</button>
                        {Array.isArray(formError) ? formError?.map(item => <p key={item} className="text-danger">{item}</p>) : null}
                    </form>
                </div>
            </div>

        </>
    )
}

export default CreateUser

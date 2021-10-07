import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import "./auth.css";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchIn } from "../../redux/action/userAction";
// import "./Login.css";
function SignIn() {
    const dispatch = useDispatch();
    const signIn = useSelector(state => state.userReducer.User)
    const history = useHistory();

    const dataObj = { email: "", password: "" }
    const [userData, setUserData] = useState(dataObj);
    const [valid, setValid] = useState(false)
    // console.log(userData)
    const formHandler = (e) => {
        e.preventDefault();
        console.log(userData);
        if (userData.email.length < 1 || userData.password.length < 1) {
            setValid(true);



        } else {
            setValid(false);
            dispatch(fetchIn(userData));
            setUserData(dataObj);
            // history.push("/dashboard");
        }
    }

    return (
        <div className="auth-wrapper">
            <div className="auth-inner">
                <form>
                    <h3>Sign In</h3>

                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" className="form-control " value={userData.email} placeholder="Enter email" onChange={(e) => {
                            const data = { ...userData };
                            data.email = e.target.value;
                            setUserData(data)
                        }} />
                        {
                            valid && userData.email == "" ? <span className="text-danger error-span py-2">Email required *</span> : null
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
                            valid && userData.password == "" ? <span className="text-danger error-span py-2">Password required *</span> : null
                        }
                    </div>

                    <div className="form-group">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                            <label className="custom-control-label px-1" htmlFor="customCheck1">Remember me</label>
                        </div>
                    </div>

                    <button onClick={(e) => formHandler(e)} className="btn btn-primary btn-block">Sign In</button>
                    <p className="forgot-password text-right">
                        <Link to="/sign-up">Sign Up?</Link>
                    </p>
                    {signIn ? signIn.map(item => <p key={item} className="text-danger">{item}</p>) : null}
                </form>
            </div>
        </div>
    );
}

export default SignIn;
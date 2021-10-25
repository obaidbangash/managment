import React, { useState, useEffect } from "react";
import "./auth.css";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchIn } from "../../redux/action/userAction";
import SignUp from "./SignUp";
// import "./Login.css";
function SignIn({ setLogin }) {


    const dispatch = useDispatch();
    const user = useSelector(state => state.userReducer.User);
    const error = useSelector(state => state.userReducer.error);
    const history = useHistory();


    const dataObj = { email: "", password: "" }
    const [userData, setUserData] = useState(dataObj);
    const [valid, setValid] = useState(false)
    const formHandler = (e) => {
        e.preventDefault();
        // console.log(userData);
        if (userData.email.length < 1 || userData.password.length < 1) {
            setValid(true);
        } else {
            setValid(false);
            dispatch(fetchIn(userData, history));
            setUserData(dataObj);
            // setLogin(true)
        }

    }
    const [active, setActive] = useState(true);

    useEffect(() => {
        // dispatch(fetchIn(userData, history));
    }, [])

    return (
        <div className="auth-wrapper">
            <div className={!active ? `form-wrapper right-panel-active` : "form-wrapper"}>
                <SignUp setActive={setActive} />
                <div className="form-container sign-in-container">
                    <form>
                        <h1>Sign in</h1>
                        <div className="social-container">
                            <a href="#" className="social"><i className="fa fa-facebook-f"></i></a>
                            <a href="#" className="social"><i className="fa fa-google"></i></a>
                            <a href="#" className="social"><i className="fa fa-linkedin"></i></a>
                        </div>
                        <span className="useAcount">or use your account</span>
                        <div className="form-group">
                            <input type="email" value={userData.email} placeholder="Enter email" onChange={(e) => {
                                const data = { ...userData };
                                data.email = e.target.value;
                                setUserData(data)
                            }} />
                            {
                                valid && userData.email == "" ? <span className="text-danger error-span py-2">Email required *</span> : null
                            }
                        </div>

                        <div className="form-group">
                            <input type="password" value={userData.password} placeholder="Enter password" onChange={(e) => {
                                const data = { ...userData };
                                data.password = e.target.value;
                                setUserData(data)
                            }} />
                            {
                                valid && userData.password == "" ? <span className="text-danger error-span py-2">Password required *</span> : null
                            }
                        </div>
                        <a href="#">Forgot your password?</a>
                        <button onClick={(e) => formHandler(e)} >Sign In</button>
                        {Array.isArray(error) ? error?.map(item => <p key={item} className="text-danger">{item}</p>) : null}
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>To keep connected with us please login with your personal info</p>
                            <button className="ghost" id="signIn" onClick={() => setActive(true)}>Sign In</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>Hello, Friend!</h1>
                            <p>Enter your personal details and start journey with us</p>
                            <button className="ghost" id="signUp" onClick={() => setActive(false)}>Sign Up</button>
                        </div>
                    </div>
                </div>


            </div>


        </div>

    );
}

export default SignIn;
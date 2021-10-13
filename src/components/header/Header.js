import React from 'react'
import { Link } from 'react-router-dom'
function Header({ setLogin }) {

    const signOut = () => {
        // e.preventDefault()
        sessionStorage.removeItem("email");
        sessionStorage.removeItem("password");
        // sessionStorage.removeItem("token");
        sessionStorage.setItem("logIn", false);
        setLogin(false)

    }
    return (
        <header className="fixed-top bg-dark">
            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container">
                    <Link className="navbar-brand" to={"/"}>Time Management</Link>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item mx-2">
                                <Link className="nav-link" to={"/"}><b>Dashboard</b></Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="nav-link" to={"/sign-in"}><b>Login</b></Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="nav-link" to={"/sign-up"}><b>Sign up</b></Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="nav-link" to={"/sign-in"} onClick={() => signOut()}><b>Sign Out</b></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header

import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { SignOut } from '../../redux/action/SignInAction';
function Header({ setLogin }) {
    const name = sessionStorage.getItem("name");
    const dispatch = useDispatch();
    // const signOut = () => {
    //     // e.preventDefault()
    //     sessionStorage.removeItem("email");
    //     sessionStorage.removeItem("token");
    //     sessionStorage.removeItem("role");
    //     sessionStorage.removeItem("logIn");

    //     // sessionStorage.removeItem("token");
    //     // sessionStorage.setItem("logIn", false);
    //     setLogin(false)

    // }
    let role = sessionStorage.getItem("role")
    return (
        <header className=" bg-dark">
            <nav className="navbar navbar-expand-lg   flex-column">
                <Link className="navbar-brand" to={"/"}>
                    <i className="fa fa-paw mx-2"></i>
                    Time Management</Link>

                <div className="profile clearfix">
                    <div className="profile_pic">
                        <img src="https://cdn-icons-png.flaticon.com/512/3011/3011270.png" alt="..." className="img-circle profile_img" />
                    </div>
                    <div className="profile_info">
                        <span>Welcome,</span>
                        <h2>{name}</h2>
                    </div>
                </div>
                <div className="collapse navbar-collapse w-100 mt-5" id="navbarTogglerDemo02">
                    <ul className="navbar-nav mx-auto flex-column w-100">
                        <li className="nav-item mx-2">
                            <Link className="nav-link" to={"/"}><i className="fa fa-home"></i>Dashboard</Link>
                        </li>
                        {
                            role === "admin" ? <li className="nav-item mx-2">
                                <Link className="nav-link" to={"/Worklog"}>
                                    <i class="fa fa-table"></i>
                                    WorkLogs</Link>
                            </li> : null
                        }
                        <li className="nav-item mx-2">
                            <Link className="nav-link" to={"/sign-up"}>
                                <i class="fa fa-edit"></i>
                                Create User</Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link className="nav-link" to={"/"}>
                                <i class="fa fa-bar-chart-o"></i>
                                Forms</Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link className="nav-link" to={"/"}>
                                <i class="fa fa-clone"></i>
                                Layouts</Link>
                        </li>

                        <li className="nav-item mx-2">
                            <Link className="nav-link" to={"/sign-in"} onClick={() => dispatch(SignOut())}>
                                <i class="fa fa-sign-out"></i>
                                Sign Out</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header

import React from 'react'

function CreateUser() {
    return (
        <>

            <div className="auth-wrapper">
                <div className="auth-inner">
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
                        <button onClick={(e) => formHandler(e)} className="btn btn-primary btn-block">Sign Up</button>

                        <p className="forgot-password text-right">
                            Already registered <Link to="/sign-in">Sign in?</Link>
                        </p>
                        {/* {user ? user?.map(item => <p key={item} className="text-danger">{item}</p>) : null} */}
                    </form>
                </div>
            </div>

        </>
    )
}

export default CreateUser

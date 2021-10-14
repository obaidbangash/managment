import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { UpdateUser } from "../../redux/action/userAction"
import { getAllData } from "../../redux/action/PaginationAction"
function EditUser({ setEditForm, setEditData, editData }) {
    // const user = useSelector(state => state.userReducer.updateUser);
    const dispatch = useDispatch();
    let token = sessionStorage.getItem("token");

    // console.log(user, "usasdaser")
    const dataObj = { firstName: "", lastName: "", email: "", password: "", password_confirmation: "" }
    const [edit, setEdit] = useState(editData)
    const [valid, setValid] = useState(false)
    const page = useSelector((state) => state.Pagenation.page);

    // console.log(edit)
    const formHandler = (e) => {
        e.preventDefault();

        if (edit.firstName.length < 1 || edit.lastName.length < 1 || edit.email.length < 1 || edit.password.length < 1 || edit.password_confirmation.length < 1) {
            setValid(true);

        } else {
            setValid(false);
            setValid(dataObj);
            dispatch(UpdateUser(edit))
            dispatch(getAllData(token, page));


        }
    }
    return (
        <>
            <div className="auth-wrapper create-user">

                <div className="auth-inner">
                    <i className="fa fa-close close-btn" onClick={() => setEditForm(false)}> </i>
                    <form>
                        <h3>Update User</h3>
                        <div className="form-group">
                            <label>First name</label>
                            <input type="text" className="form-control" value={edit.firstName} placeholder="First name" onChange={(e) => {
                                const data = { ...edit };
                                data.firstName = e.target.value;
                                setEdit(data)
                            }} />
                            {
                                valid && edit.firstName == "" ? <span className="text-danger error-span py-2">The First Name Can Not Be Blank.</span> : null
                            }
                        </div>
                        <div className="form-group">
                            <label>Last name</label>
                            <input type="text" className="form-control" value={edit.lastName} placeholder="Last name" onChange={(e) => {
                                const data = { ...edit };
                                data.lastName = e.target.value;
                                setEdit(data)
                            }} />
                            {
                                valid && edit.lastName == "" ? <span className="text-danger error-span py-2">The Last Name Can Not Be Blank.</span> : null
                            }
                        </div>
                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" className="form-control " value={edit.email} placeholder="Enter email" onChange={(e) => {
                                const data = { ...edit };
                                data.email = e.target.value;
                                setEdit(data)
                            }} />
                            {
                                valid && edit.email == "" ? <span className="text-danger error-span py-2">The Email Can Not Be Blank.</span> : null
                            }
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" value={edit.password} placeholder="Enter password" onChange={(e) => {
                                const data = { ...edit };
                                data.password = e.target.value;
                                setEdit(data)
                            }} />
                            {
                                valid && edit.password == "" ? <span className="text-danger error-span py-2">The Password Can Not Be Blank.</span> : null
                            }
                        </div>
                        <div className="form-group">
                            <label>Confirm Password</label>
                            <input type="password" className="form-control" value={edit.password_confirmation} placeholder="Confirm password" onChange={(e) => {
                                const data = { ...edit };
                                data.password_confirmation = e.target.value;
                                setEdit(data)
                            }} />
                            {
                                valid && edit.password_confirmation == "" ? <span className="text-danger error-span py-2">The Password Can Not Be Blank.</span> : null
                            }
                        </div>
                        <button onClick={(e) => formHandler(e)} className="btn btn-primary btn-block">Update User</button>
                        {/* {user ? user?.map(item => <p key={item} className="text-danger">{item}</p>) : null} */}
                    </form>
                </div>
            </div>

        </>
    )
}

export default EditUser

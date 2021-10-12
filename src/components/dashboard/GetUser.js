import React, { useEffect } from 'react'
import { getUsers, DeleteUser, UpdateUser } from '../../redux/action/userAction';
import { useSelector, useDispatch } from "react-redux";

function GetUser({ setEditForm, setEditData }) {
    const user = useSelector(state => state.userReducer.users);

    const dispatch = useDispatch();
    let token = sessionStorage.getItem("token");
    useEffect(() => {
        dispatch(getUsers(token))
    }, []);
    useEffect((id) => {
        dispatch(DeleteUser(token, id))
    }, [user.length]);


    const RemoveUser = (id) => {
        dispatch(DeleteUser(token, id))
        dispatch(getUsers(token))
    }
    const EditUser = (state, id, token) => {
        setEditForm(true)
        dispatch(UpdateUser(state, token, id))
    }
    console.log(user, "user")
    return (
        <div>
            <table class="table table-striped">
                <thead class="thead-dark bg-dark text-white">
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">FirstName</th>
                        <th scope="col">LastName</th>
                        <th scope="col">Email</th>
                        <th scope="col">Created_at</th>
                        <th scope="col">Manager</th>
                        <th scope="col">Working Hrs</th>
                        <th scope="col">Delete</th>
                        <th scope="col">Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user.length > 1 ? user?.map((item, i) => {
                            return (
                                <>
                                    <tr key={i}>
                                        <th scope="row">{item.id}</th>
                                        <td>{item.firstName}</td>
                                        <td>{item.lastName}</td>
                                        <td>{item.email}</td>
                                        <td>{item.created_at}</td>
                                        <td>{item.manager.firstName}</td>
                                        <td>{item.manager.working_hours}</td>
                                        <td><button className="btn btn-danger" onClick={() => {
                                            RemoveUser(item.id)
                                        }}>Delete</button></td>
                                        <td><button className="btn btn-danger" onClick={() => {
                                            setEditData(item)
                                            EditUser(item.id,)
                                        }} >Edit</button></td>
                                    </tr>
                                </>
                            )

                        }) : null
                    }

                </tbody>
            </table>



        </div >
    )
}

export default GetUser

import React, { useEffect } from 'react'
import { DeleteUser, getUsers } from '../../redux/action/userAction';
import { useSelector, useDispatch } from "react-redux";
import { getAllData } from "../../redux/action/PaginationAction";
import Pagenation from "./Pagenation";
function ManagerDate({ setEditData, setEditForm }) {
    const user = useSelector(state => state.userReducer.users);
    let role = sessionStorage.getItem("role")
    const dispatch = useDispatch();
    let token = sessionStorage.getItem("token");
    useEffect(() => {
        dispatch(getUsers(token))
    }, []);

    const workData = useSelector(state => state.Pagenation.users);
    const page = useSelector((state) => state.Pagenation.page)
    const totalPages = useSelector((state) => state.Pagenation.AllPages)
    useEffect(() => {
        dispatch(getAllData(token, page));
    }, [token, page])

    const RemoveUser = (id) => {
        dispatch(getUsers(token))
        dispatch(DeleteUser(token, id))
    }
    const EditUser = (state) => {
        setEditData(state)
        setEditForm(true)
    }

    return (
        <>
            <table className="table table-striped">
                <thead className="thead-dark bg-dark text-white">
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
                    {Array.isArray(user) && user?.map((item, i) => {
                        return (
                            <tr key={i}>
                                <th scope="row">{item.id}</th>
                                <td>{item.firstName}</td>
                                <td>{item.lastName}</td>
                                <td>{item.email}</td>
                                <td>{item.created_at}</td>
                                <td>{item.manager?.firstName}</td>
                                <td>{item.manager?.working_hours}</td>
                                <td><button className="btn btn-danger" onClick={() => {
                                    RemoveUser(item.id)
                                }}>Delete</button></td>
                                <td><button className="btn btn-danger" onClick={() => {
                                    EditUser(item)
                                }} >Edit</button></td>
                            </tr>
                        )

                    })
                    }

                </tbody>
            </table>
            <Pagenation />
        </ >
    )
}

export default ManagerDate

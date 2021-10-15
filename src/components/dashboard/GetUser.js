import React, { useEffect } from 'react'
import { getUsers } from '../../redux/action/GetUser';
import { DeleteUser } from '../../redux/action/DeleteAction';
// import { UpdateUser } from '../../redux/action/UpdateAction';
import { useSelector, useDispatch } from "react-redux";
import { getAllData } from "../../redux/action/PaginationAction";
import Pagenation from "./Pagenation";
function GetUser({ setEditForm, setEditData }) {
    const user = useSelector(state => state.userReducer.users);
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
        // dispatch(UpdateUser(state))
    }

    return (
        <>
            <table className="table table-striped">
                <thead className="thead-dark bg-dark text-white">
                    <tr>
                        <th className="px-3" scope="col">#</th>
                        <th scope="col">FirstName</th>
                        <th scope="col">LastName</th>
                        <th scope="col">Email</th>
                        <th scope="col">Created_at</th>
                        <th scope="col">Role</th>
                        <th scope="col">View Logs</th>
                        <th scope="col" className="text-center">Action</th>
                        {/* <th scope="col" className="text-center">Edit</th> */}
                    </tr>
                </thead>
                <tbody >
                    {Array.isArray(workData) && workData?.map((item, i) => {
                        console.log(item, "item log")
                        return (
                            <>
                                <tr key={i}>
                                    <th scope="row">{item.id}</th>
                                    <td>{item.firstName}</td>
                                    <td>{item.lastName}</td>
                                    <td>{item.email}</td>
                                    <td>{item.created_at}</td>
                                    <td>{item.roles[0].name}</td>
                                    <td><button className="btn">View Logs</button></td>
                                    <td className="text-center ">
                                        <i className="fa fa-edit" onClick={() => {
                                            EditUser(item)
                                        }} ></i>
                                        <i className="fa fa-trash mx-2 cursor-pointer" onClick={() => {
                                            RemoveUser(item.id)
                                        }}>
                                        </i>

                                    </td>
                                    {/* <td className="text-center"> </td> */}
                                </tr>
                            </>
                        )

                    })
                    }

                </tbody>
            </table>
            <Pagenation />

        </ >
    )
}

export default GetUser

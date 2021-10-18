import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import CreateUser from "./CreateUser";
import EditUser from './EditUser';
import GetUser from './GetUser';
import ManagerDate from './ManagerDate';

import LogsContainer from './workLogs/LogsContainer';

function Dashboard() {
    // console.log(token, "token")
    const [createUser, setCreateUser] = useState(false);
    const [editForm, setEditForm] = useState(false);
    const [editData, setEditData] = useState({})
    let role = sessionStorage.getItem("role")
    // const { userReducer: { User: { roles } } } = useSelector(state => state);
    // console.log(roles[0].name, "rolleeeeeee")
    return (
        <>
            {
                role === "admin" ?
                    <><section className="main-section">
                        <button onClick={() => setCreateUser(true)} className="btn btn-danger"><i className="fa fa-plus mx-2"> </i>Create User</button>
                        <GetUser setEditForm={setEditForm} setEditData={setEditData} />
                        {createUser ? <CreateUser setCreateUser={setCreateUser} /> : null}
                        {editForm ? <EditUser setEditForm={setEditForm} editData={editData} setEditData={setEditData} /> : null}
                    </section>
                    </> : role === "manager" ? <>
                        <section className="main-section">
                            <button onClick={() => setCreateUser(true)} className="btn btn-danger">Create User </button>
                            <ManagerDate setEditForm={setEditForm} setEditData={setEditData} />
                            {createUser ? <CreateUser setCreateUser={setCreateUser} /> : null}
                            {editForm ? <EditUser setEditForm={setEditForm} editData={editData} setEditData={setEditData} /> : null}
                        </section>
                    </> : <>
                        <LogsContainer />
                    </>
            }




        </>
    )
}
export default Dashboard

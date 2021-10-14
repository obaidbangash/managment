import React, { useState } from 'react'
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

    return (
        <>
            <section className="main-section">
                {
                    role === "admin" ? <>
                        <button onClick={() => setCreateUser(true)} className="btn btn-danger">Create User </button>
                        <GetUser setEditForm={setEditForm} setEditData={setEditData} />
                        {createUser ? <CreateUser setCreateUser={setCreateUser} /> : null}
                        {editForm ? <EditUser setEditForm={setEditForm} editData={editData} setEditData={setEditData} /> : null}
                    </> : role === "manager" ? <>
                        <button onClick={() => setCreateUser(true)} className="btn btn-danger">Create User </button>
                        <ManagerDate setEditForm={setEditForm} setEditData={setEditData} />
                        {createUser ? <CreateUser setCreateUser={setCreateUser} /> : null}
                        {editForm ? <EditUser setEditForm={setEditForm} editData={editData} setEditData={setEditData} /> : null}
                    </> : <>
                        <LogsContainer />
                    </>
                }



            </section>
        </>
    )
}
export default Dashboard

import React, { useState } from 'react'
import CreateUser from "./CreateUser";
import EditUser from './EditUser';
import GetUser from './GetUser';
import ManagerDate from './ManagerDate';

import LogsContainer from './workLogs/LogsContainer';

function Dashboard() {
    const [createUser, setCreateUser] = useState(false);
    const [editForm, setEditForm] = useState(false);
    const [editData, setEditData] = useState({})
    let role = sessionStorage.getItem("role")
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

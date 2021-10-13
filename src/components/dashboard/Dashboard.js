import React, { useState } from 'react'
import CreateUser from "./CreateUser";
import EditUser from './EditUser';
import GetUser from './GetUser';


function Dashboard() {
    // console.log(token, "token")
    const [createUser, setCreateUser] = useState(false);
    const [editForm, setEditForm] = useState(false);
    const [editData, setEditData] = useState({})
    console.log(editData)

    return (
        <>
            <section className="main-section">
                <button onClick={() => setCreateUser(true)} className="btn btn-danger">Create User </button>
                <GetUser setEditForm={setEditForm} setEditData={setEditData} />
                {createUser ? <CreateUser setCreateUser={setCreateUser} /> : null}
                {editForm ? <EditUser setEditForm={setEditForm} editData={editData} setEditData={setEditData} /> : null}

            </section>
        </>
    )
}
export default Dashboard

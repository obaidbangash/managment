import React, { useState } from 'react'
import Setlogs from './Setlogs';
import LogsData from './LogsData';
import UpdateLogs from './UpdateLogs';

function LogsContainer() {
    const [editLogs, setEditLogs] = useState([])
    const [editModal, seteditModal] = useState(false)
    console.log(editLogs)
    return (
        <>
            <button className="btn btn-danger "><i className="fa fa-plus mx-2"></i> Add WorkLogs</button>
            {/* <Setlogs /> */}
            <LogsData setEditLogs={setEditLogs} seteditModal={seteditModal} />
            {editModal ? <UpdateLogs setEditLogs={setEditLogs} editLogs={editLogs} seteditModal={seteditModal} /> : null}
        </>
    )
}

export default LogsContainer

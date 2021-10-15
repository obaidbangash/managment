import React, { useState } from 'react'
import Setlogs from './Setlogs';
import LogsData from './LogsData';
import UpdateLogs from './UpdateLogs';

function LogsContainer() {
    const [editLogs, setEditLogs] = useState([])
    const [editModal, seteditModal] = useState(false)
    const [setModal, setSetModal] = useState(false)
    return (
        <>
            <button className="btn btn-danger " onClick={() => setSetModal(true)}><i className="fa fa-plus mx-2"></i> Add WorkLogs</button>
            {setModal ? <Setlogs setSetModal={setSetModal} /> : null}
            <LogsData setEditLogs={setEditLogs} seteditModal={seteditModal} />
            {editModal ? <UpdateLogs setEditLogs={setEditLogs} editLogs={editLogs} seteditModal={seteditModal} /> : null}
        </>
    )
}

export default LogsContainer

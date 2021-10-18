import React, { useState } from 'react'
import Setlogs from './Setlogs';
import LogsData from './LogsData';
import UpdateLogs from './UpdateLogs';
import SetHrs from './SetHrs';
import FilterLog from './FilterLog';

function LogsContainer() {
    const [editLogs, setEditLogs] = useState([])
    const [editModal, seteditModal] = useState(false)
    const [setModal, setSetModal] = useState(false)
    const [FilterModal, setFilterModal] = useState(false)
    return (
        <>
            <section className="main-section">
                <div className="d-flex mb-3">
                    <button className="btn btn-danger " onClick={() => setSetModal(true)}><i className="fa fa-plus mx-2"></i> Add WorkLogs</button>
                    <SetHrs />
                    <button className="btn btn-danger " onClick={() => setFilterModal(true)}><i className="fa fa-plus mx-2"></i> Filter by Date</button>


                </div>
                {FilterModal ? <FilterLog setFilterModal={setFilterModal} /> : null}
                {setModal ? <Setlogs setSetModal={setSetModal} /> : null}
                <LogsData setEditLogs={setEditLogs} seteditModal={seteditModal} />
                {editModal ? <UpdateLogs setEditLogs={setEditLogs} editLogs={editLogs} seteditModal={seteditModal} /> : null}
            </section>
        </>
    )
}

export default LogsContainer

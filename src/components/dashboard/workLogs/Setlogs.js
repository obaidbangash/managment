import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { PostLogs } from '../../../redux/action/CreateLogs';
import { GetLogData } from '../../../redux/action/GetLogs';
function Setlogs({ setSetModal }) {
    const dispatch = useDispatch();
    let token = sessionStorage.getItem("token");
    let id = sessionStorage.getItem("id");

    const dataObj = { logDate: "", hours: "", description: "", }
    const [edit, setEdit] = useState(dataObj)
    const [valid, setValid] = useState(false)
    const formHandler = (e) => {
        e.preventDefault();
        if (edit.logDate.length < 1 || edit.hours.length < 1 || edit.description.length < 1) {
            setValid(true);
        } else {
            setValid(false)
            dispatch(PostLogs(edit, token))
            dispatch(GetLogData(token))
        }
    }
    return (
        <>
            <div className="auth-wrapper create-user">

                <div className="auth-inner">
                    <div class="close-btn" onClick={() => setSetModal(false)}>  <i class="fa fa-close"> </i></div>
                    <form>
                        <h3>Create WorkLogs</h3>
                        <div className="form-group">
                            <label>Log Data</label>
                            <input type="date" className="form-control" value={edit.logDate} placeholder="logDate" onChange={(e) => {
                                const data = { ...edit };
                                data.logDate = e.target.value;
                                setEdit(data)
                            }} />
                            {
                                valid && edit.logDate == "" ? <span className="text-danger error-span py-2">The logDate Can Not Be Blank.</span> : null
                            }
                        </div>
                        <div className="form-group">
                            <label>Hours</label>
                            <input type="number" className="form-control" value={edit.hours} placeholder="Hours" onChange={(e) => {
                                const data = { ...edit };
                                data.hours = e.target.value;
                                setEdit(data)
                            }} />
                            {
                                valid && edit.hours == "" ? <span className="text-danger error-span py-2">Hours Can Not Be Blank.</span> : null
                            }
                        </div>
                        <div className="form-group">
                            <label>Description</label>
                            <textarea type="text" className="form-control " value={edit.description} placeholder="Description" onChange={(e) => {
                                const data = { ...edit };
                                data.description = e.target.value;
                                setEdit(data)
                            }} />
                            {
                                valid && edit.description == "" ? <span className="text-danger error-span py-2">Description Can Not Be Blank.</span> : null
                            }
                        </div>
                        <button onClick={(e) => formHandler(e)} className="btn btn-primary btn-block">Create Logs</button>
                        {/* {user ? user?.map(item => <p key={item} className="text-danger">{item}</p>) : null} */}
                    </form>
                </div>
            </div>
        </>
    )
}
export default Setlogs;

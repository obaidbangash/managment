import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { PostLogs } from '../../../redux/action/CreateLogs';
import { Update_Logs } from '../../../redux/action/EditLogs';
import { GetLogData } from '../../../redux/action/GetLogs';
function UpdateLogs({ setEditLogs, editLogs, seteditModal }) {
    const error = useSelector(state => state.LogReducer.error)
    const dispatch = useDispatch();
    let token = sessionStorage.getItem("token");
    // const dataObj = { logDate: "", hours: "", description: "", }
    const [edit, setEdit] = useState(editLogs)
    const [valid, setValid] = useState(false)
    // const page = useSelector((state) => state.Pagenation.page);

    // console.log(edit)
    const formHandler = (e) => {
        e.preventDefault();

        if (edit.logDate.length < 1 || edit.hours.length < 1 || edit.description.length < 1) {
            setValid(true);

        } else {
            setValid(false)
            dispatch(Update_Logs(edit, token))
            dispatch(GetLogData(token))

        }
    }
    return (
        <>
            <div className="auth-wrapper create-user">

                <div className="auth-inner">
                    <div className="close-btn" onClick={() => {
                        seteditModal(false)
                    }}>  <i className="fa fa-close"> </i></div>
                    <form>
                        <h3>Edit WorkLog</h3>
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
                        <button onClick={(e) => formHandler(e)} className="btn btn-primary btn-block">Update Log</button>
                        {error ? error?.map(item => <p key={item} className="text-danger">{item}</p>) : null}
                    </form>
                </div>
            </div>

        </>
    )
}

export default UpdateLogs;

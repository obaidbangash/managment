import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { GetLogData, GetSpecLogData, PatchGet } from '../../../redux/action/Worklogs';
function SetHrs() {
    const [preferedHrs, setPreferedHrs] = useState('');
    const dispatch = useDispatch()
    const Id = useSelector(state => state.LogReducer.logId);
    let token = sessionStorage.getItem("token")
    const preferedHours = () => {
        dispatch(PatchGet(preferedHrs))
        Id ? dispatch(GetSpecLogData(Id, token)) : dispatch(GetLogData(token))

    }
    return (
        <>
            <div className="d-flex w-50 mx-auto">
                <div className="prefered-hours mx-3">
                    <input className="form-control" placeholder="Set Prefered Hours" type="number" onChange={(e) => {
                        setPreferedHrs(e.target.value)
                    }} />
                </div>
                <button className="btn btn-success" onClick={() => preferedHours()}>Set Prefered Hours</button>
            </div>
        </>
    )
}

export default SetHrs

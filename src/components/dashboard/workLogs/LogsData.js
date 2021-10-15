import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { GetLogData, GetSpecLogData } from '../../../redux/action/GetLogs';
function LogsData({ setEditLogs, seteditModal }) {
    const WorkLogs = useSelector(state => state.LogReducer.logData.data);
    const Id = useSelector(state => state.LogReducer.logId);
    const dispatch = useDispatch();
    let token = sessionStorage.getItem("token")
    useEffect(() => {
        Id ? dispatch(GetSpecLogData(Id, token)) : dispatch(GetLogData(token))
    }, [token, Id])

    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Log Date</th>
                    <th>Created at</th>
                    <th>Hours</th>
                    <th>Description</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    WorkLogs?.map((item, i) => {
                        return (
                            <tr key={i} style={{ backgroundColor: item?.hours > 6 ? '#FFCCCB ' : '#aedb9f' }}>
                                <td>{item?.id}</td>
                                <td>{item?.log_date}</td>
                                <td>{item?.created_at}</td>
                                <td>{item?.hours}</td>
                                <td>{item?.description}</td>
                                <td><button className="btn btn-success" onClick={() => {
                                    seteditModal(true)
                                    setEditLogs(item)
                                }}>Edit</button></td>
                                <td><button className="btn btn-danger">Delete</button></td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table >
    )
}

export default LogsData

import React, { useState } from 'react'
import { FilterLogs } from '../../../redux/action/Worklogs';
import { useDispatch, useSelector } from "react-redux"
function FilterLog({ setFilterModal }) {
    const dispatch = useDispatch()
    const [dataFilter, setDateFilter] = useState({ From: "", to: "" })

    const FilterSubmit = (e) => {
        e.preventDefault()
        dispatch(FilterLogs(dataFilter.from, dataFilter.to))
    }
    return (
        <>
            <div className="auth-wrapper create-user">
                <div className="auth-inner">
                    <div class="close-btn" onClick={() => setFilterModal(false)}>  <i class="fa fa-close"> </i></div>
                    <form>
                        <h3>Filter by date</h3>
                        <div className="form-group">
                            <input type="date" placeholder="from" className="form-control" required pattern="\d{4}-\d{1}-\d{1}" onChange={(e) => {
                                const data = { ...dataFilter };
                                data.from = e.target.value;
                                setDateFilter(data)
                            }} />
                        </div>
                        <div className="form-group">
                            <input type="date" placeholder="to" className="form-control" onChange={(e) => {
                                const data = { ...dataFilter };
                                data.to = e.target.value;
                                setDateFilter(data)
                            }} />
                        </div>
                    </form>
                    <button className="btn btn-success" onClick={(e) => {

                        FilterSubmit(e)
                    }}>Filter by data</button>
                </div>
            </div>
        </>
    )
}

export default FilterLog

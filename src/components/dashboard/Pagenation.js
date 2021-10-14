import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { set_page, getAllData } from "../../redux/action/PaginationAction"
function Pagenation() {
    const token = sessionStorage.getItem('token')
    const dispatch = useDispatch()
    const page = useSelector((state) => state.Pagenation.page)
    const totalPages = useSelector((state) => state.Pagenation.AllPages);
    console.log(totalPages, page)
    // const role = useSelector((state)=>state.AuthReducer.role)
    useEffect(() => {
        dispatch(getAllData(token, page));
    }, [token, page])
    return (
        <>
            <nav aria-label="..." className="text-end">
                <ul className="pagination mt-5 ml-auto justify-content-end">
                    <li className={`page-item ${page <= 1 ? "disabled" : ''}`}>
                        <span className='page-link' style={{ cursor: 'pointer' }} onClick={() => dispatch(set_page(page - 1))}>Previous</span>
                    </li>
                    <li className={`page-item ${page === page ? '' : ''}`} >
                        <span className="page-link" style={{ cursor: 'pointer' }} onClick={() => dispatch(set_page(page))}>{page}</span>
                    </li>
                    {/* {totalPages.map((p, i) => <li key={i} className={`page-item ${p === page ? 'active' : ''}`} aria-current="page">
                        <span className="page-link" style={{ cursor: 'pointer' }} onClick={() => dispatch(set_page(p))}>{p}</span>
                    </li>
                    )} */}
                    <li className={`page-item ${page === totalPages.length ? "disabled" : ''}`}>
                        <span className={`page-link`} style={{ cursor: 'pointer' }} onClick={() => dispatch(set_page(page + 1))}>Next</span>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Pagenation

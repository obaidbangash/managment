import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { set_page, getAllData } from "../../redux/action/PaginationAction"
function Pagenation() {
    const token = sessionStorage.getItem('token')
    const dispatch = useDispatch()
    const page = useSelector((state) => state.Pagenation.page)
    const totalPages = useSelector((state) => state.Pagenation.AllPages);
    useEffect(() => {
        dispatch(getAllData(token, page));
    }, [token, page])

    return (
        <>
            <nav aria-label="..." className="text-end">
                <ul className="pagination mt-5 ml-auto justify-content-end">
                    {totalPages.length >= page ? <li className={`page-item ${page == 1 ? "d-none" : ''}`}>
                        <span className="page-link" style={{ cursor: 'pointer' }} onClick={() => dispatch(set_page(totalPages[0]))}>First Page</span>
                    </li> : null}
                    <li className={`page-item ${page <= 1 ? "disabled" : ''}`}>
                        <span className='page-link' style={{ cursor: 'pointer' }} onClick={() => dispatch(set_page(page - 1))}>Previous</span>
                    </li>
                    {page > 1 ? <li className={`page-item`} >
                        <span className="page-link" style={{ cursor: 'pointer' }} onClick={() => dispatch(set_page(page - 1))}>{page - 1}</span>
                    </li> : null}
                    <li className={`page-item ${page === page ? 'active' : ''}`} >
                        <span className="page-link" style={{ cursor: 'pointer' }} onClick={() => dispatch(set_page(page))}>{page}</span>
                    </li>
                    {totalPages.length > page ? <li className={`page-item`} >
                        <span className="page-link" style={{ cursor: 'pointer' }} onClick={() => dispatch(set_page(page + 1))}>{page + 1}</span>
                    </li> : null}
                    <li className={`page-item ${page === totalPages.length ? "disabled" : ''}`}>
                        <span className={`page-link`} style={{ cursor: 'pointer' }} onClick={() => dispatch(set_page(page + 1))}>Next</span>
                    </li>
                    {totalPages.length > page ? <li className={`page-item`} >
                        <span className="page-link" style={{ cursor: 'pointer' }} onClick={() => dispatch(set_page(totalPages.length))}>Last Page</span>
                    </li> : null}
                </ul>
            </nav>
        </>
    )
}

export default Pagenation

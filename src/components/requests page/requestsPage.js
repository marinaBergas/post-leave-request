import React from 'react'

import '../datatable/dataTable.scss'
import Requests from '../manager requests/Requests'
import DataTable from '../datatable/DataTable'
const requestsPage = () => {
    return (
        <div className="container-fluid">
            <div className="row search-row">
                <DataTable/>
            </div>
            <div className="row">
                <Requests/>
            </div>
            
        </div>
    )
}

export default requestsPage

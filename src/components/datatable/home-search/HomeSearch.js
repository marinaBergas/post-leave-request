import React from 'react';
import DataTable from '../DataTable';
import {BiWorld} from 'react-icons/bi'
import './homeSearch.scss'
const HomeSearch = () => {
    return (
        <div className="container-fluid p-0 m-0">
          <div className="row employ-search-home mx-1 ">
              <div className="col-md-2 world-icon ml-2 ">
              <BiWorld /> 
              </div>
            <div className="col-md-10 search-input ">
                <DataTable/>
            </div>
        </div>
        </div>
    
    )
}

export default HomeSearch

import React, { useEffect } from 'react';
import { useDispatch} from 'react-redux';
import { setCurrentEmployee } from '../../redux/Employee.action';
import AnnualLeave from '../annual leave/AnnualLeave';
import FormSearch from '../datatable/form-search/FormSearch';
import EmployeeInformation from '../employee search information/EmployeeInformation';
import PostLeaveForm from '../post-leave-form/Form';
import './form-Fieldset.scss'
import {
    FormGroup,
  } from "reactstrap";
  import {AiFillFlag} from 'react-icons/ai'

const FormFieldset = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        async function fetchData(){
          const res =  await fetch('http://localhost:8000/employees')
          const data = await res.json()
            dispatch (setCurrentEmployee(data))
        }
        fetchData();
      }, [])
    return (
        <div>
            <div className="container-fluid">
            <FormGroup tag="fieldset" className="">
            <legend className="text-capitalize text-right  text-body p-2 d-flex form-fieldSet-legend" style={{width:"100%"}} >
             <div className="post-leave-request px-3"><h5>Post Leave Request</h5></div>
            <div className="d-flex px-3"  >
                <AiFillFlag className="text-muted mx-1"/>
                <h5>Request No.</h5>
                </div> 
            </legend>
                <div className="row">
                    <div className="col-lg-9 col-xs-12">
                        <FormSearch/>
                        <EmployeeInformation/>
                        <PostLeaveForm/>
                    </div>
                    <div className="col-lg-3 col-xs-12">
                        <AnnualLeave/>
                    </div>
                </div>
            </FormGroup>
            </div>
        </div>
    )
}

export default FormFieldset

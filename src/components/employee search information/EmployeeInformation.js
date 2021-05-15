import React from 'react';
import employImage from '../../assets/image/g1.jpg';
import './employee.scss';
const EmployeeInformation = () => {
    return (
            <div className="row my-1 employInfo p-0 mx-1">
                <div className="col-md-2">
                   <img src={employImage} alt="employee-image" className="w-100" />
                </div>
                <div className="col-md-10 text-muted">
                    <div className="row">
                        <h6>Job Title : </h6>
                    </div>
                    <div className="row">
                        <h6>Salary Profile : </h6>
                    </div>
                    <div className="row">
                        <h6>Joining Date : </h6>
                    </div>
                    <div className="row">
                        <h6>Location : </h6>
                    </div>
                </div>
            </div>
    )
}

export default EmployeeInformation
  
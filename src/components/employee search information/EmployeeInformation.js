import React from "react";
import { useSelector } from "react-redux";
import employImage from "../../assets/image/g1.jpg";
import "./employee.scss";
const mapState = ({ employee }) => ({
  searchEmployee: employee.searchEmployee,
});
const EmployeeInformation = () => {
  const { searchEmployee } = useSelector(mapState);
  console.log("searchEmployee", searchEmployee);
  return (
    <div className="row my-1 employInfo p-0 mx-1">
      <div className="col-md-2">
        <img src={employImage} alt="employee-image" className="w-100" />
      </div>
    <div className="col-md-10 text-muted">
    <div className="row flex-nowrap">
    { searchEmployee &&    
            <span className="col-md-1 text-info-left p-0 m-0">{searchEmployee.code}</span>
         }
          { searchEmployee &&   <h5 className="p-0 m-0">|| {searchEmployee.name} </h5>}
        </div>
        <div className="row flex-nowrap">
          <h6 className="col-md-3 text-info-left  ">Job Title : </h6>
          {searchEmployee &&  <span>{searchEmployee.jobTitle}</span> } 
        </div>
        <div className="row flex-nowrap">
          <h6 className="col-md-3 text-info-left ">Salary Profile :</h6> 
          {searchEmployee&&<span>{searchEmployee.salaryProfile}</span>}
        </div>
        <div className="row flex-nowrap">
          <h6 className="col-md-3 text-info-left ">Joining Date : </h6> 
         {searchEmployee&&<span> {searchEmployee.joiningDate}</span> }
        </div>
        <div className="row flex-nowrap">
          <h6 className="col-md-3 text-info-left ">Location :</h6>
          {searchEmployee&&<span>{searchEmployee.address}</span>  }
        </div>
      </div>
    </div>
  );
};

export default EmployeeInformation;

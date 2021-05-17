import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import employImage from "../../assets/image/g1.jpg";
import { RiArrowRightSLine } from "react-icons/ri";
import "./employee.scss";
const mapState = ({ employee }) => ({
  searchEmployee: employee.searchEmployee,
});
const EmployeeInformation = () => {
  useEffect(() => {
    console.log(searchEmployee);
  }, []);
  const { searchEmployee } = useSelector(mapState);
  console.log("searchEmployee", searchEmployee);
  return (
    <div className="container-fluid p-0 m-0">
      <div className="row my-1 employInfo p-0 mx-1 ">
        <div className="col-md-2 p-0 m-0 employee-image ">
          <img src={employImage} alt="employee-image" className="w-100 h-100" />
        </div>
        <div className="col-md-10  text-muted pt-2">
          
           
              <div className="row ">
                <div className="row ">
                
                {searchEmployee && (
                  <span className="col-md-1 text-info-left px-1 m-0 ">
                    {searchEmployee.code}||{" "}
                  </span>
                )}
                {searchEmployee && (
                  <h5 className="col-md-11 px-0 mx-0 employee-details-title">
                    {searchEmployee.name}{" "}
                  </h5>
                )}
            </div>
            
              <div className="row ">
                <h6 className="col-lg-3 col-md-3 text-info-left employee-details-title ">
                  Job Title{" "}
                </h6>
                {searchEmployee && (
                  <span className="col-lg-9  col-md-12 employee-details">
                    {searchEmployee.jobTitle}
                  </span>
                )}
              </div>

              <div className="row ">
                <h6 className="col-lg-3 col-md-3  text-info-left employee-details-title">
                  Salary Profile{" "}
                </h6>
                {searchEmployee && (
                  <span className="col-lg-9 col-md-12  employee-details">
                    {searchEmployee.salaryProfile}
                  </span>
                )}
              </div>
              <div className="row ">
                <h6 className="col-lg-3 col-md-3 text-info-left employee-details-title ">
                  Joining Date{" "}
                </h6>
                {searchEmployee && (
                  <span className="col-lg-9  col-md-12  employee-details">
                    {" "}
                    {searchEmployee.joiningDate}
                  </span>
                )}
              </div>
              <div className="row  ">
                <h6 className="col-lg-3 col-md-3 text-info-left employee-details-title ">
                  Location{" "}
                </h6>
                <div className="col-lg-9  col-md-9  d-flex flex-nowrap  employee-details">
                  {searchEmployee && <span className="employee-address">{searchEmployee.address}</span>}
                  {searchEmployee && (
                    <h5 className="arrow-icon align-items-center ">
                      <RiArrowRightSLine />
                    </h5>
                  )}
                  {searchEmployee && <span className="employee-address">Admin&General</span>}
                  {searchEmployee && (
                    <h5 className="arrow-icon ">
                      <RiArrowRightSLine />
                    </h5>
                  )}
                  {searchEmployee && <span className="employee-address">Human Resources</span>}
                  {searchEmployee && (
                    <h5 className="arrow-icon ">
                      <RiArrowRightSLine />
                    </h5>
                  )}
                  {searchEmployee && <span className="employee-address">Employee Relations</span>}
                </div>
              </div>
            </div>
         
        </div>
      </div>
    </div>
  );
};

export default EmployeeInformation;

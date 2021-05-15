
import React, { useEffect, useState } from 'react';
import { Table } from 'reactstrap';
import {useDispatch, useSelector} from 'react-redux';
import { setCurrentEmployee } from '../../redux/Employee.action';
import photo from '../../assets/image/g1.jpg';
import './request.scss'

const mapState = ({ employee }) => ({
  currentEmployee: employee.currentEmployee,
});
const Requests = (props) => {
  const {  currentEmployee } = useSelector(mapState);
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
      <>
      
        <Table responsive size="xs" className="p-0 ">
        <thead>
          <tr className="text-center align-baseline  ">
            <th className="text-capitalize">req no</th>
            <th className="text-capitalize">image</th>
            <th className="text-capitalize">code</th>
            <th className="text-capitalize">employee name</th>
            <th className="text-capitalize">jop title</th>
            <th className="text-capitalize">salary profile</th>
            <th className="text-capitalize" >expected leave start date</th>
            <th className="text-capitalize">expected leave rejoin date</th>
            <th className="text-capitalize">actual leaving</th>
            <th className="text-capitalize">leave type 1</th>
          </tr>
        </thead>
        <tbody>
          {
            currentEmployee.map((employee,index)=>(
              <tr key={index} className="text-center align-baseline text-muted">
              <td  >{employee.id}</td>
              <td ><img alt="employee-img" src={photo} height="30px"/> </td>
              <td  >{employee.code}</td>
              <td style={{width: "22%"}} className="overflow-hidden">{employee.name}</td>
              <td style={{width: "13%"}}>{employee.jobTitle}</td>
              <td >{employee.salaryProfile}</td>
              <td >{employee.expectedLeavingDate}</td>
              <td >{employee.expectedRejoiningDate}</td>
              <td >{employee.actualLeave}</td>
              <td style={{width: "13%"}}>{employee.stLeaveType}</td>
            </tr>
            ))
          }
        
        
        </tbody>
      </Table>
      </>
    )
}


export default Requests


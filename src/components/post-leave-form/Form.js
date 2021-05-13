import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Card, CardHeader, CardBody, CardText } from "reactstrap";
import { CgMathPlus } from "react-icons/cg";
import { FaRegCalendarCheck } from 'react-icons/fa';


import './form.scss'
import FileUploadRe from "./FileUpload";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentEmployee } from "../../redux/Employee.action";

const mapState = ({ employee }) => ({
  currentEmployee: employee.currentEmployee,

});
const PostLeaveForm = (props) => {
  // const {  currentEmployee } = useSelector(mapState);
  const dispatch = useDispatch();
  const [employeeName, setEmployeeName] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [salaryProfile, setSalaryProfile] = useState('');
  const [expectedLeavingDate, setExpectedLeavingDate] = useState('');
  const [expectedRejoiningDate, setExpectedRejoiningDate] = useState('');
  const [stLeaveType, setStLeaveType] = useState('');
  const history = useHistory();
  const handlePush = () => {
    history.push("/table");
  }
  const addEmployee = async (employee) => {
    const res = await fetch('http://localhost:8000/employees', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(employee)
    })
 
    const data = await res.json();
      //setTasks([...tasks,data])
     // const id = Math.floor(Math.random()*10000)+1
     // const newTask={id,...task}
     // setTasks([...tasks,newTask])
  }
  const onSubmit = (e) => {
     e.preventDefault()

    addEmployee({ 
      employeeName, 
      jobTitle, 
      salaryProfile, 
      expectedLeavingDate,
       expectedRejoiningDate,
         stLeaveType 
        })
    setEmployeeName('')
    setJobTitle('')
    setSalaryProfile('')
    setExpectedLeavingDate('')
    setExpectedRejoiningDate('')
    setStLeaveType('')
  }
 const handleSubmit=(e)=>{
  onSubmit(e);
 }


  return (

    <FormGroup tag="fieldset" className="m-3 p-3 text-muted" >
      <div className="container-fluid  text-muted " >
        <Form className="row " onSubmit={onSubmit} >
          <FormGroup tag="fieldset" className="pb-5 pt-3" >
            <legend className="text-capitalize text-right m-0 p-0 text-body ">
              leave details
            </legend>
            <div className="row text-left text-leave p-0 mx-2 ">
              <label className="col-md-3 text-capitalize text-leave-right align-self-center">
                leave to avail
              </label>
              <div className="col-md-6 text-capitalize h6 ">
                <FormGroup check >
                  <Label check className="text-radio ">
                    <Input
                      type="radio"
                      name="radio1"
                      className="text-capitalize "
                      
                    />{" "}
                    abroad
                  </Label>
                  <Label check>
                    <Input
                      type="radio"
                      name="radio1"
                      className="text-capitalize"
                    />{" "}
                    local
                  </Label>
                </FormGroup>
              </div>
            </div>

            <div className="row text-left text-leave p-0 mx-2 py-2  ">
              <label className="col-md-3 text-capitalize text-leave-right align-self-center">
                require leave salary advance
              </label>
              <div className="col-md-6 text-capitalize h6 ">
                <FormGroup check>
                  <Label check className="text2-radio">
                    <Input
                      type="radio"
                      name="radio2"
                      className="text-capitalize "
                    />{" "}
                    yes
                  </Label>
                  <Label check>
                    <Input
                      type="radio"
                      name="radio2"
                      className="text-capitalize"
                    />{" "}
                    no
                  </Label>
                </FormGroup>
              </div>
            </div>
            <div className="row expected-leave-text p-0 mx-2 py-2">
              <label className="col-md-3 text-capitalize text-leave-right align-self-center">
                expected leaving date
            </label>
              <div className="col-md-3 text-capitalize ">
                <FormGroup className="date-input d-flex align-items-center ">
                  <Input
                    name=" expectedLeavingDate"
                    id="exampleDate"
                    type="date"
                    placeholder="05/06/2021"
                    className="text-muted"
                    onChange={(e)=>setExpectedLeavingDate(e.target.value)}
                  />
                </FormGroup>
              </div>
              <label className="col-md-3 text-capitalize text-leave-right align-self-center">
                expected rejoining date
            </label>
              <div className="col-md-3 text-capitalize ">
                <FormGroup className="date-input d-flex align-items-center  " >
                  <Input
                    name=" expectedRejoiningDate"
                    id="exampleDate"
                    type="date"
                    placeholder=" "
                    className="text-muted"
                    onChange={(e)=>setExpectedRejoiningDate(e.target.value)}
                  />
                </FormGroup>
              </div>
            </div>
            <div className="row px-0  py-2 ">
              <label className="col-md-3 text-capitalize text-leave-right align-self-center">
                expected end date
            </label>
            </div>
            <div className="row end-date mx-2 py-2 ">
              <label className="col-md-2 text-capitalize text-leave-right align-self-center">
                1st leave type
            </label>
              <div className="col-md-3 text-capitalize text-muted">
                <select id="exampleSelect" className="form-select text-muted" name="stLeaveType" onChange={(e)=>setStLeaveType(e.target.value)}>
                  <option className="text-capitalize" >--Please select leave type--</option>
                  <option className="text-capitalize">annual leave with payroll</option>
                  <option className="text-capitalize">sick leave</option>
                  <option className="text-capitalize">annual leave during reserve</option>

                </select>
              </div>
              <label className="col-md-4 text-capitalize text-leave-right align-self-center">
                no. of days
            </label>
              <div className="col-md-1 text-capitalize  ">
                <Input
                  name="expectedEndDate"
                  id="text"
                  type="text"
                  placeholder="Enter numb "
                  className="daysNum  text-center "
                />
              </div>
            </div>
            <div className="row justify-content-center text-center px-0 mx-2 pb-2">
              <div className="col-md-2 justify-content-center  plus-text pb-0 ">
                <CgMathPlus className="plus-circle h4 mb-1 mt-2" />
              </div>
            </div>
            <div className="row justify-content-center py-1 px-0 mx-2">
              <div className="col-md-12 text-total-days align-self-center text-center  ml-5">

                <FaRegCalendarCheck className="h6" />
                <label className=" text-capitalize px-1 ">
                  total days
              </label>

              </div>
            </div>
            <div className="row px-0  py-2 mx-3 ">
              <div className="col-md-6">
                <Card>
                  <CardHeader className="text-body">
                    <h5>Guarantor</h5>
                  </CardHeader>
                  <CardBody>
                    <CardText> <select id="exampleSelect" className="form-select text-muted bg-white">
                      <option >Select an option</option>
                      <option >2</option>
                      <option >3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                    </CardText>
                  </CardBody>
                </Card>
              </div>
              <div className="col-md-6">
                <Card>
                  <CardHeader className="text-body">
                    <h5>Replacement</h5>
                  </CardHeader>
                  <CardBody>
                    <CardText> <select id="exampleSelect" className="form-select text-muted bg-white">
                      <option >Select an option</option>
                      <option >2</option>
                      <option >3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                    </CardText>
                  </CardBody>
                </Card>
              </div>
            </div>
            <div className="row py-3 px-0 mx-2">
              <Card className="p-0 ">
                <CardHeader>
                  <h5>Contact details during leave</h5>
                </CardHeader>
                <CardBody>
                  <div className="row py-3 px-0 mx-2">

                    <label className="col-md-2 text-capitalize text-leave-right align-self-center">
                      address
                    </label>
                    <div className="col-md-4 text-capitalize ">
                      <FormGroup className="date-input d-flex align-items-center ">
                        <Input
                          name="date"
                          id="exampleDate"
                          type="text"
                          placeholder=" "
                          className="text-muted"
                        />
                      </FormGroup>
                    </div>
                    <label className="col-md-2 text-capitalize text-leave-right align-self-center">
                      contact no.
            </label>
                    <div className="col-md-4 text-capitalize ">
                      <FormGroup className="date-input d-flex align-items-center ">
                        <Input
                          name="date"
                          id="exampleDate"
                          type="text"
                          placeholder=" "
                          className="text-muted"
                        />
                      </FormGroup>
                    </div>
                  </div>
                  <div className="row py-3 px-0 mx-2">
                    <label className="col-md-2 text-capitalize text-leave-right align-self-center">
                      email
                </label>
                    <div className="col-md-4 text-capitalize ">
                      <FormGroup className="date-input d-flex align-items-center ">
                        <Input
                          name="date"
                          id="exampleDate"
                          type="text"
                          placeholder=" "
                          className="text-muted"
                        />
                      </FormGroup>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>
          </FormGroup>
          <div className="row px-0  py-2 ">
            <div className="col-md-6">
              <Card>
                <CardHeader className="text-body">
                  <h5>Remarks</h5>
                </CardHeader>
                <CardBody>
                  <CardText>
                    <textarea id="w3review" name="w3review" rows="4" cols="50" className="border-secondary"></textarea>
                  </CardText>
                </CardBody>
              </Card>
            </div>
            <div className="col-md-6">
              <Card>
                <CardHeader className="text-body">
                  <h5>Attchments</h5>
                </CardHeader>
                <CardBody>
                  <FileUploadRe />
                </CardBody>
              </Card>
            </div>
          </div>
          <div className="row justify-content-center text-center">
            <div className="col-md-4">
              <div className="btn cancel-btn text-secondary mx-2 px-2">
                Cancel
            </div>
              <div className="btn submit-btn mx-2 " onClick={handleSubmit} >
                Submit
            </div>
            </div>

          </div>



          <button onClick={handlePush} >go to table</button>
        </Form>
      </div>
    </FormGroup>
  );
};

export default PostLeaveForm;

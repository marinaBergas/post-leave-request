import React, { useRef, useState } from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Card,
  CardHeader,
  CardBody,
  CardText,
} from "reactstrap";
import { CgMathPlus } from "react-icons/cg";
import { FaRegCalendarCheck } from "react-icons/fa";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

import "./form.scss";
import FileUploadRe from "./FileUpload";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentEmployee } from "../../redux/Employee.action";
import { useForkRef } from "@material-ui/core";

const mapState = ({ employee }) => ({
  currentEmployee: employee.currentEmployee,
});
const PostLeaveForm = (props) => {
  const { currentEmployee } = useSelector(mapState);
  const dispatch = useDispatch();
  const [name, setname] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [salaryProfile, setSalaryProfile] = useState("");
  const [expectedLeavingDate, setExpectedLeavingDate] = useState("");
  const [expectedRejoiningDate, setExpectedRejoiningDate] = useState("");
  const [stLeaveType, setStLeaveType] = useState("");
  const [guarantorState, setGuarantorState] = useState("");
  const [replacement, setReplacement] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [expectedEndDate, setExpectedEndDate] = useState("");
  const [fields ,setFields ]=useState({})
  const [errors, setErrors] = useState({})
  const inputRef = useForkRef();
  // const FORM_ERRORS={ "leaveType":"",
  // "replacement":"",
  // "guarantor":"",}
  // const [errors , seErrors ] = useState(FORM_ERRORS);
  const history = useHistory();
  const handlePush = () => {
    history.push("/table");
  };
  const addEmployee = async (employee) => {
    const res = await fetch("http://localhost:8000/employees", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(employee),
    });

    const data = await res.json();
    //setTasks([...tasks,data])
    // const id = Math.floor(Math.random()*10000)+1
    // const newTask={id,...task}
    // setTasks([...tasks,newTask])
  };
  const handleValidation=()=>{
    console.log("fields",fields["guarantor"])
    let formIsValid = true;
    
    if(fields["guarantor"]==undefined){
      formIsValid = false;
      console.log("jhh")
      errors["Guarantor"] = "Cannot be empty";
      setErrors({errors})
   }else{
    formIsValid = true;
   }
   return formIsValid;
  }
  const onSubmit = (e) => {
    // const isValid=validateFrom();
    if(handleValidation()){
      alert("Form submitted");
   }else{
      alert("Form has errors.")
   }
    // console.log("isValidm",isValidm)
    if(handleValidation()){

    
    e.preventDefault()
 
    addEmployee({
      name,
      jobTitle,
      salaryProfile,
      expectedLeavingDate,
      expectedRejoiningDate,
      stLeaveType,
      address
    });
    setname("");
    setJobTitle("");
    setSalaryProfile("");
    setExpectedLeavingDate("");
    setExpectedRejoiningDate("");
    setStLeaveType("");
    setAddress("");
  history.push("/table");

  }
  };


  const handleSubmit = () => {
   alert("form not vaild")
   // check  form data vliadation
   //save current employee
    // const isValid=validateFrom();
  //  const isValidm=validateFromm();
  //  console.log("isvalid:",isValid)
  };
// const validateFrom=() => {

//   let isValid=validateleaveTypeSelector(stLeaveType,"leaveType","--Please select leave type--");
  
//   if(isValid&& 
//     expectedLeavingDate&&
//     expectedRejoiningDate){
//       return true;
//     }
//   return false;
// }
// const validateFromm=() => {
 

//   let isValidm=validateGuarantorSelector(guarantorState,"guarantor","select an option");
//   console.log("before",isValidm)

//   if(isValidm&& 
//     expectedLeavingDate&&
//     expectedRejoiningDate){
//       return true;
//     }
//   return false;
//   console.log("after",isValidm)
// }
// const validateleaveTypeSelector=(selectorValue,errorName,initialValue)=>{
//   const errorObject=formErrors;
//   if(!selectorValue||selectorValue==initialValue){
//   const leaveType="This Field Is Required";
//     setFormErrors({leaveType,guarantor:errorObject.guarantor,replacement:errorObject.replacement});
//   }
//   else{
//     errorObject[errorName]="";
//   }
//   console.log("errorObject[errorName]",errorObject[errorName])
//   return errorObject[errorName].length=="";
// }
// const validateReplacementSelector=(selectorValue,errorName,initialValue)=>{
//   console.log("selectorValue:",selectorValue  )
//   const errorObject=formErrors;
//   if(!selectorValue||selectorValue==initialValue){
//   const replacement="This Field Is Required";
//     setFormErrors({replacement,leaveType:errorObject.leaveType,guarantor:errorObject.guarantor});
//   }
//   else{
//     errorObject[errorName]="";
//   }
//   //setFormErrors(errorObject);
//   console.log("errorObject",errorObject)
//   return errorObject[errorName].length>0;
// }
// const validateGuarantorSelector=(selectorValue,errorName,initialValue)=>{

//   const errorObjectGur=formErrors;
//   if(!selectorValue||selectorValue==initialValue){
//   const guarantor="This Field Is Required";
//   console.log("guarantor:",guarantor  )
//     setFormErrors({guarantor,leaveType:errorObjectGur.leaveType,replacement:errorObjectGur.replacement});

//   }
//   else{
    
//     errorObjectGur[errorName]="";
//   }
//   //setFormErrors(errorObjectGur);
//   return errorObjectGur[errorName].length>0;
// }
// const handleOnChangeLeaveType=(e)=>{
//   setStLeaveType(e.currentTarget.value);
//   let isValid=validateleaveTypeSelector(e.currentTarget.value,"leaveType","--Please select leave type--");
// }
// const handleOnChangeGuarantor=(e)=>{
//   setGuarantorState(e.currentTarget.value);
//   let isValid=validateGuarantorSelector(e.currentTarget.value,"guarantor","select an option");
// }
const handleOnChangeGuarantor=(event)=>{
 
  fields["guarantor"]=(event.currentTarget.value);

  setFields({fields})
  console.log("fields",fields["guarantor"])
  // let isValid=validateReplacementSelector(e.currentTarget.value,"replacement","select an option");
}
  return ( 
    <FormGroup tag="fieldset" className="m-1 p-1 text-muted">
      <div className="container-fluid  text-muted p-1 m-0">
        <ValidatorForm
          onSubmit={handleSubmit}
          onError={(errors) => console.log("errors",errors)}
          className="p-0 m-0"
        >
          <FormGroup tag="fieldset" className="pb-5 pt-3">
            <legend className="text-capitalize text-right m-0 p-0 text-body ">
              leave details
            </legend>
            <div className="row text-left text-leave p-0 mx-2 ">
              <label className="col-md-3 text-capitalize text-form-right align-self-center">
                leave to avail
              </label>
              <div className="col-md-6 col-xs-12 text-capitalize h6 ">
                <FormGroup check>
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
              <label className="col-md-3 text-capitalize text-form-right align-self-center">
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
              <label className="col-md-3 text-capitalize text-form-right align-self-center">
                expected leaving date
              </label>
              <div className="col-md-3 text-capitalize ">
             
                  <TextValidator
                    name=" expectedLeavingDate"
                    id="expectedLeavingDate"
                    type="date"
                    placeholder="05/06/2021"
                    className="text-muted  "
                    onChange={(e) => setExpectedLeavingDate(e.target.value)}
                    value={expectedLeavingDate}
                    validators={["required"]}
                    errorMessages={["this field is required"]}
                  />
              
              </div>
              <label className="col-md-3 text-capitalize text-form-right align-self-center">
                expected rejoining date
              </label>
              <div className="col-md-3 text-capitalize ">
                
                      <TextValidator
                        onChange={(e) => setExpectedRejoiningDate(e.target.value)}
                        name=" expectedRejoiningDate"
                        id="expectedRejoiningDate"
                        type="date"
                         placeholder=" "
                         className="text-muted"
                        value={expectedRejoiningDate}
                        validators={["required"]}
                        errorMessages={[
                          "this field is required"
                        ]}
                        className="  text-muted"
                      />
               
              </div>
            </div>
            <div className="row px-0  py-2 ">
              <label className="col-md-3 text-capitalize text-form-right align-self-center">
                expected end date
              </label>
            </div>
            <div className="row end-date mx-2 py-2 ">
              <label className="col-md-2 text-capitalize text-form-right align-self-center">
                1st leave type
              </label>
              <div className="col-md-3 text-capitalize text-muted">
                <select
                  id="stLeaveType"
                  className="form-select text-muted"
                  name="stLeaveType"
                  // onChange={handleOnChangeLeaveType}
                >
                   <option className="text-capitalize">
                   --Please select leave type--
                  </option>
                  <option className="text-capitalize">
                    annual leave with payroll
                  </option>
                  <option className="text-capitalize">sick leave</option>
                  <option className="text-capitalize">
                    annual leave during reserve
                  </option>
                </select>
                {/* {formErrors.leaveType && <span style={{color:"red"}}>{formErrors.leaveType}</span>} */}
              </div>
              <label className="col-md-4 text-capitalize text-form-right align-self-center">
                no. of days
              </label>
              <div className="col-md-2 text-capitalize  ">
            
                   <TextValidator
                        onChange={(e) => setExpectedEndDate(e.target.value)}
                        name="expectedEndDate"
                        id="expectedEndDate"
                        type="text"
                        placeholder="Enter numb "
                        className="daysNum  text-center "
                        
                        value={expectedEndDate}
                        validators={["required"]}
                        errorMessages={[
                          "this field is required"
                        ]}
                        className=" "
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
                <label className=" text-capitalize px-1 ">total days</label>
              </div>
            </div>
            <div className="row px-0  py-2 mx-3 ">
              <div className="col-md-6">
                <Card>
                  <CardHeader className="text-body">
                    <h5>Guarantor</h5>
                  </CardHeader>
                  <CardBody>
                    <CardText>
                      {" "}
                      <select
                        id="GuarantorSelect"
                        className="form-select text-muted bg-white"
                        ref={inputRef}
                        onChange={handleOnChangeGuarantor} 
                        value={setFields["Guarantor"]}
                      >
                        <option>select an option</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                      {errors.guarantor&& <span style={{color:"red"}}>{errors.guarantor}hh</span>}
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
                    <CardText>
                      {" "}
                      <select
                        id="option"
                        className="form-select text-muted bg-white"
                        // onChange={handleOnChangeReplacement}
                      >
                        <option>select an option</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                      {/* {formErrors.replacement && <span style={{color:"red"}}>{formErrors.replacement}hh</span>} */}
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
                    <label className="col-md-2 text-capitalize text-form-right align-self-center">
                      address
                    </label>
                    <div className="col-md-4 text-capitalize ">

                         <TextValidator
                        onChange={(e) => setAddress(e.target.value)}
                         name="text"
                         id="address"
                         type="text"
                         placeholder=" "
                         className="text-muted"
                        value={address}
                        validators={["required"]}
                        errorMessages={[
                          "this field is required"
                        ]}
                        className=" "
                      />
                    </div>
                    <label className="col-md-2 text-capitalize text-form-right align-self-center">
                      contact no.
                    </label>
                    <div className="col-md-4 text-capitalize ">
                     <TextValidator
                        onChange={(e) => setContact(e.target.value)}
                         name="text"
                         id="contact"
                         type="text"
                         placeholder=" "
                         className="text-muted"
                        value={contact}
                        validators={["required"]}
                        errorMessages={[
                          "this field is required"
                        ]}
                        className=" "
                      />
                    </div>
                  </div>
                  <div className="row py-3 px-0 mx-2">
                    <label className="col-md-2 text-capitalize text-form-right align-self-center">
                      email
                    </label>
                    <div className="col-md-4 text-capitalize ">
                      <TextValidator
                      id="email"
                        onChange={(e) => setEmail(e.target.value)}
                        name="email"
                        value={email}
                        validators={["required", "isEmail"]}
                        errorMessages={[
                          "this field is required",
                          "email is not valid",
                        ]}
                        className=" "
                      />
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
                    <textarea
                      id="Remarks"
                      name="w3review"
                      rows="4"
                      cols="50"
                      
                      style={{ width: "100%" }}
                    ></textarea>
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
             <button
                className="btn submit-btn mx-2 "
                type="submit"
                onClick={onSubmit}
              >
                Submit
              </button>
            </div>
          </div>

          <button onClick={handlePush}>go to table</button>
        </ValidatorForm>
      </div>
    </FormGroup>
  );
};

export default PostLeaveForm;

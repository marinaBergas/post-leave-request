import React, { useEffect, useRef, useState } from "react";
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
import Validation from "./Validation";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import { useForkRef } from "@material-ui/core";
import { ImAttachment } from "react-icons/im";
import { HiInformationCircle } from "react-icons/hi";

import "./form.scss";
import "./fileUpload.scss";

const mapState = ({ employee }) => ({
  searchEmployee: employee.searchEmployee,
  leavePost: employee.leavePost,
});
const PostLeaveForm = ({ text }) => {
  const { searchEmployee, leavePost } = useSelector(mapState);
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
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState("");
  const [isSubmmitting, setIsSubmmitting] = useState(false);
  let [fileName, setFileName] = useState("");
  let [fileSize, setFileSize] = useState("");
  let [errorUpload, setErrorUpload] = useState("");

  const inputRef = useForkRef();
  const history = useHistory();

  const addEmployee = async (employee) => {
    const res = await fetch(
      "https://my-json-server.typicode.com/marinaBergas/post-leave-request/employees/employees",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(employee),
      }
    );

    const data = await res.json();
  };

  const updateLeavePost = async (id) => {
    const leavePostToggle = await fetchLeavePost(id);
    console.log("values", values);
    const updateLeavePost = {
      ...searchEmployee,
      ...values,
      expectedLeavingDate,
      expectedRejoiningDate,
    };
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updateLeavePost),
    };
    const response = await fetch(
      `https://my-json-server.typicode.com/marinaBergas/post-leave-request/employees/${id}`,
      requestOptions
    );
    const data = await response.json();
    if (
      Object.keys(Validation(values)).length === 0 &&
      expectedLeavingDate &&
      expectedRejoiningDate &&
      expectedEndDate &&
      address &&
      searchEmployee
    ) {
      const {
        radio1,
        radio2,
        stLeaveType,
        GuarantorSelect,
        Replacement,
        Remarks,
        Attchments,
        expectedLeavingDate,
        expectedRejoiningDate,
      } = values;
    }
  };

  const fetchLeavePost = async (id) => {
    const res = await fetch(
      `https://my-json-server.typicode.com/marinaBergas/post-leave-request/employees/${id}`
    );
    const data = await res.json();
    return data;
  };

  const onSubmit = (e) => {
    setErrors(Validation(values));
    setIsSubmmitting(true);

    if (
      Object.keys(Validation(values)).length === 0 &&
      expectedLeavingDate &&
      expectedRejoiningDate &&
      expectedEndDate &&
      address &&
      searchEmployee
    ) {
      const {
        radio1,
        radio2,
        stLeaveType,
        GuarantorSelect,
        Replacement,
        Remarks,
        Attchments,
        expectedLeavingDate,
        expectedRejoiningDate,
      } = values;

      addEmployee({
        name,
        jobTitle,
        salaryProfile,
        expectedLeavingDate,
        expectedRejoiningDate,
        stLeaveType,
        address,
      });
      setname("");
      setJobTitle("");
      setSalaryProfile("");
      setExpectedLeavingDate("");
      setExpectedRejoiningDate("");
      setStLeaveType("");
      setAddress("");
      history.push("/");
    }
  };

  const handleSubmit = () => {
    alert("you should select employee");
  };

  useEffect(() => {
    isSubmmitting && setErrors(Validation(values));
  }, [values]);
  const onCancel = () => {
    history.push("/");
  };

  const handelChanges = (e) => {
    let newValues = {
      ...values,
      [e.target.name]: e.target.value,
    };
    setValues(newValues);
    if (Object.keys(Validation(values)).length === 0) {
      const {
        radio1,
        radio2,
        stLeaveType,
        GuarantorSelect,
        Replacement,
        Remarks,
        Attchments,
        expectedLeavingDate,
        expectedRejoiningDate,
      } = values;
    }
  };
  const handelChangesUploadFile = (e) => {
    e.preventDefault();
    setFileName(e.target.files[0].name);
    setFileSize(e.target.files[0].size);
    if (fileSize > 1000000) {
      setErrorUpload("File upload size is larger than 1MB");
    }
    let newValues = {
      ...values,
      [e.target.name]: e.target.value,
    };
    setValues(newValues);
    if (Object.keys(Validation(values)).length === 0) {
      const {
        radio1,
        radio2,
        stLeaveType,
        GuarantorSelect,
        Replacement,
        Remarks,
        Attchments,
      } = values;
    }
  };

  return (
    <FormGroup tag="fieldset" className="m-1 p-1 text-muted">
      <div className="container-fluid  text-muted p-1 m-0">
        <ValidatorForm
          onSubmit={handleSubmit}
          onError={(errors) => console.log("errors", errors)}
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
                      onChange={handelChanges}
                    />{" "}
                    abroad
                  </Label>
                  <Label check>
                    <Input
                      type="radio"
                      name="radio1"
                      className="text-capitalize"
                      onChange={handelChanges}
                    />{" "}
                    local
                  </Label>
                </FormGroup>
              </div>
              {errors.radio2 && (
                <span className=" text-right text-error mt-2 mr-auto">
                  {errors.radio2}
                </span>
              )}
            </div>

            <div className="row text-left text-leave p-0 mx-2 py-2  ">
              <label className="col-md-3 text-capitalize text-form-right align-self-center">
                require leave salary advance
              </label>
              <div className="col-md-6 text-capitalize h6 text-form-radio ">
                <FormGroup check>
                  <Label check className="text2-radio">
                    <Input
                      type="radio"
                      name="radio2"
                      className="text-capitalize ml-2"
                      onChange={handelChanges}
                    />{" "}
                    yes
                  </Label>
                  <Label check>
                    <Input
                      type="radio"
                      name="radio2"
                      className="text-capitalize ml-2"
                      onChange={handelChanges}
                    />{" "}
                    no
                  </Label>
                </FormGroup>
              </div>
              {errors.radio2 && (
                <span className="text-right text-error mt-2 mr-auto">
                  {errors.radio2}
                </span>
              )}
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
                  errorMessages={["this field is required"]}
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
                <div>
                  <select
                    id="stLeaveType"
                    className="form-select text-muted"
                    name="stLeaveType"
                    onChange={handelChanges}
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
                </div>
                {errors.stLeaveType && (
                  <span className="text-left text-errors mt-2 ml-2">
                    {errors.stLeaveType}
                  </span>
                )}
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
                  errorMessages={["this field is required"]}
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
                        name="GuarantorSelect"
                        className="form-select text-muted bg-white"
                        ref={inputRef}
                        onChange={handelChanges}
                        defaultValue="select an option"
                      >
                        <option>select an option</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                      {errors.GuarantorSelect && (
                        <span className="text-left mt-2 text-errors ml-2">
                          {errors.GuarantorSelect}
                        </span>
                      )}
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
                        name="Replacement"
                        onChange={handelChanges}
                        defaultValue="select an option"
                      >
                        <option>select an option</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                      {errors.Replacement && (
                        <span className="text-left text-errors mt-2 ml-2">
                          {errors.Replacement}
                        </span>
                      )}
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
                        errorMessages={["this field is required"]}
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
                        errorMessages={["this field is required"]}
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
                      name="Remarks"
                      onChange={handelChanges}
                      style={{ width: "100%" }}
                    ></textarea>
                    {errors.Remarks && (
                      <span className="text-errors text-left mt-2 ml-2">
                        {errors.Remarks}
                      </span>
                    )}
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
                  <div className="input-group" style={{ width: "80%" }}>
                    <input
                      type="text"
                      className="form-control bg-white "
                      style={{ border: "2px solid #ddd", width: "50px" }}
                      readOnly
                      placeholder={fileName}
                    />
                    <div className="input-group-btn">
                      <span className="fileUpload btn ">
                        <ImAttachment />
                        <input
                          type="file"
                          className="upload up"
                          id="up"
                          onChange={handelChangesUploadFile}
                          name="Attchments"
                        />
                      </span>
                    </div>
                  </div>
                  <p className="info-text">
                    <HiInformationCircle /> Max File Size 1 MB
                  </p>
                  <label>{errorUpload}</label>
                  {errors.Attchments && (
                    <span className="text-errors text-left mt-2 ml-2">
                      {errors.Attchments}
                    </span>
                  )}
                </CardBody>
              </Card>
            </div>
          </div>
          <div className="row justify-content-center text-center">
            <div className="col-md-4">
              <div
                className="btn cancel-btn text-secondary mx-2 px-2  "
                onClick={onCancel}
              >
                Cancel
              </div>
              {leavePost == "submit" && (
                <button
                  className="btn submit-btn mx-2 "
                  type="submit"
                  onClick={onSubmit}
                  text="formSubmit"
                >
                  submit
                </button>
              )}

              {leavePost == "edit" && (
                <button
                  className="btn submit-btn mx-2 "
                  type="submit"
                  onClick={() => {
                    updateLeavePost(searchEmployee.id);
                  }}
                >
                  edit
                </button>
              )}
            </div>
          </div>
        </ValidatorForm>
      </div>
    </FormGroup>
  );
};

export default PostLeaveForm;

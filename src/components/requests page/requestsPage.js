import React from "react";

import "../datatable/dataTable.scss";
import Requests from "../manager requests/Requests";
import DataTable from "../datatable/DataTable";
import { BiWorld, BiDotsVerticalRounded } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";

import {
  AiOutlinePlus,
  AiOutlineCarryOut,
  AiFillPrinter,
} from "react-icons/ai";
import { RiEditBoxLine, RiDeleteBin6Fill } from "react-icons/ri";
import { FaRegEye } from "react-icons/fa";
import { FormGroup } from "reactstrap";

import "./request-page.scss";
import { useSelector } from 'react-redux';
import { useHistory } from "react-router";
const mapState = ({ employee }) => ({
    currentEmployee: employee.currentEmployee
  });
 
const RequestsPage = () => {
    const {  currentEmployee } = useSelector(mapState);
    const history = useHistory();
    const handlePush = () => {
      history.push("/form");
    };
  return (
    <div className="container-fluid">
      <FormGroup tag="fieldset" >
        <legend
          className="text-capitalize text-right  text-body p-2 d-flex form-fieldSet-legend mb-2"
          style={{ width: "100%" }}
        >
          <div className="post-leave-request px-3">
            <h5>Manage Leave Request</h5>
          </div>
          <div className="d-flex px-3">
            <h5>You Have ({currentEmployee.length})Application</h5>
          </div>
        </legend>
        <div className="row search-row p-0 mx-1">
          <div className=" world-icon-table-container ">
            <BiWorld className="text-center world-icon-table" />
          </div>
          <div className="col-md-6 serch-input">
            <DataTable />
          </div>
          <div className="col-md-1 search-icon-table-container">
            <FiSearch className="search-icon-table" />
          </div>
          <div className="col-lg-4 col-md-3  edit-icon-table-container">
            <AiOutlinePlus onClick={handlePush} className="edit-icon-table mr-1" />
            <RiEditBoxLine className="edit-icon-table mr-1" />
            <FaRegEye className="edit-icon-table mr-1" />
            <AiOutlineCarryOut className="edit-icon-table mr-1" />
            <RiDeleteBin6Fill className="edit-icon-table mr-1" />
            <AiFillPrinter className="edit-icon-table mr-1" />
            <BiDotsVerticalRounded className="edit-icon-table mr-1" />
          </div>
        </div>
        <div className="row p-0 mx-1 mt-5">
          <Requests />
        </div>
      </FormGroup>
    </div>
  );
};

export default RequestsPage;

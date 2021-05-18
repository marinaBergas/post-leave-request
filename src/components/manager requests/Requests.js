import React, { useEffect, useState } from "react";
import { Table } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentEmployee, setSearchEmployee } from "../../redux/Employee.action";
import photo from "../../assets/image/g1.jpg";
import { useTable, usePagination } from "react-table";
import employees from "../../data/db.json";
import { RiEditBoxLine } from "react-icons/ri";
import { setLeavePost } from "../../redux/Employee.action";
import "./request.scss";
import { useHistory } from "react-router";

const mapState = ({ employee }) => ({
  currentEmployee: employee.currentEmployee,
 
});
const Requests = (props) => {
  const { currentEmployee } = useSelector(mapState);
 
  const history = useHistory();
  const dispatch = useDispatch();
  const data = React.useMemo(
    () => employees["employees"],
    [employees["employees"]]
  );
  const columns = React.useMemo(
    () => [
      {
        Header: "Req no",
        accessor: "req no",
      },
      {
        Header: "Image",
        accessor: "image",
      },
      {
        Header: "Code",
        accessor: "code",
      },
      {
        Header: "Employee Name",
        accessor: "Employee Name",
      },
      {
        Header: "Job Title",
        accessor: "Job Title",
      },
      {
        Header: "Salary Profile",
        accessor: "Salary Profile",
      },
      {
        Header: "Expected Leave Start Date",
        accessor: "Expected Leave Start Date",
      },
      {
        Header: "Expected Leave Rejoin Date",
        accessor: "Expected Leave Rejoin Date",
      },
      {
        Header: "Actual Leaveing",
        accessor: "Actual Leaveing",
      },
      {
        Header: "Leave Type 1",
        accessor: "Leave Type 1",
      },
    ],
    []
  );
  let pageAray = [];
  for (let i = 0; i < Math.ceil(currentEmployee.length / 10); i++) {
    pageAray.push(`page ${i + 1} of ${Math.ceil(currentEmployee.length / 10)}`);
  }
  const [page, setpage] = useState([]);
  const goForward = (pageNum) => {
    let num = pageNum == 0 ? 0 : pageNum * 10;
    setpage(
      currentEmployee.filter((item, i) => {
        return i === num || (i <= num + 9 && i >= num);
      })
    );
  };
  useEffect(() => {
    goForward(0);
  }, [currentEmployee]);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageSize: 2 },
      rowsPerPage: "2",
    },
    usePagination
  );
  useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://localhost:8000/employees");
      const data = await res.json();
      dispatch(setCurrentEmployee(data));
    }
    fetchData();
  }, []);
  const handlePushEdit = (employee) => {
    history.push("/form");
    dispatch (setLeavePost("edit"))
    dispatch(setSearchEmployee(employee))
  };

  return (
    <>
      <Table responsive size="xs" className="p-0 " {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr
              className="text-center align-baseline  "
              {...headerGroup.getHeaderGroupProps()}
            >
              {headerGroup.headers.map((column) => (
                <th className="text-capitalize header-col" {...column.getHeaderProps()}>
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((employee, index) => (
            <tr key={index} className="text-center align-baseline text-muted ">
              <td className={employee["requestType"]} style={{ width: "5%" }}>
                {employee.id}
              </td>
              <td>
                <img alt="employee-img" src={photo} height="30px" />{" "}
              </td>
              <td>{employee.code}</td>
              <td style={{ width: "18%" }} className="overflow-hidden">
                {employee.name}
                <RiEditBoxLine onClick={()=>{
                  handlePushEdit(employee)

                  }} className=" edit-icon mr-1" />
              </td>
              <td style={{ width: "15%" }}>{employee.jobTitle}</td>
              <td>{employee.salaryProfile}</td>
              <td>{employee.expectedLeavingDate}</td>
              <td>{employee.expectedRejoiningDate}</td>
              <td>{employee.actualLeave}</td>
              <td style={{ width: "13%" }}>{employee.stLeaveType}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="row table-request">
        <div className="col-md-10 table-request-col">
          <div className="row ">
            <div className="col-md-2 col-xs-4 d-flex requests_color-col">
              <div className="requests_color_initial mx-1"></div>
              <h6 className="requests-type">Request Level</h6>
            </div>
            <div className="col-md-2 d-flex requests_color-col p-0">
              <div className="requests_color_under_approval mx-1"></div>
              <h6 className="requests-type">Under approval</h6>
            </div>
            <div className="col-md-2 d-flex requests_color-col_second p-0">
              <div className="requests_color_finial_approve mx-1"></div>
              <h6 className="requests-type">Finial level approval </h6>
            </div>
            <div className="col-md-4 d-flex p-0 ">
              <div className="requests_color_taken mx-1 "></div>
              <h6 className="requests-type">
                Action taken (Leaving is posted and approved or Leave extension){" "}
              </h6>
            </div>
            <div className="col-md-2 col-xs-4 d-flex p-0  requests_color-col_second">
              <div className="requests_color_initial mx-1"></div>
              <h6 className="requests-type">Closed transaction</h6>
            </div>
            <div className="col-md-2 col-xs-4 d-flex p-0  requests_color-col_third">
              <div className="requests_color_initial mx-1"></div>
              <h6 className="requests-type">Future Dated Transaction</h6>
            </div>
            <div className="col-md-2 col-xs-4 d-flex   requests_color-col_foruth">
              <div className="requests_color_initial mx-1"></div>
              <h6 className="requests-type">Returned</h6>
            </div>
            <div className="col-md-2 col-xs-4 d-flex  requests_color-col_foruth">
              <div className="requests_color_initial mx-1"></div>
              <h6 className="requests-type">Hold</h6>
            </div>
            <div className="col-md-2 col-xs-4 d-flex p-0  requests_color-col_third">
              <div className="requests_color_initial mx-1"></div>
              <h6 className="requests-type">Returned and On Hold </h6>
            </div>
            <div className="col-md-2 col-xs-4 d-flex p-0  requests_color-col_third">
              <div className="requests_color_initial mx-1"></div>
              <h6 className="requests-type">Extended Leave Request </h6>
            </div>
          </div>
        </div>
        <div className="col-md-2">
          <select
            onChange={(e) => {
              goForward(e.target.value);
            }}
          >
            {pageAray.map((option, index) => (
              <option key={index} value={index}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
};

export default Requests;


import React, {  useRef, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {AiOutlineReload} from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import './dataTable.scss'
import { setSearchEmployee } from '../../redux/Employee.action';
import employeeImg from '../../assets/image/g1.jpg'
const mapState = ({ employee }) => ({
  currentEmployee: employee.currentEmployee,
  searchEmployee: employee.searchEmployee,
});
export default function DataTable() {

  const {  currentEmployee } = useSelector(mapState);
  const [value, setValue] = useState({ });
  const ulIconRef = useRef();
  const inputRef = useRef();
  const [inputValue, setInputValue] = useState('');

  const dispatch = useDispatch();
 

  return (
    <div >
      <Autocomplete
          onChange={(event, newValue) => {
            setValue(newValue);
            dispatch ( setSearchEmployee(newValue))
          }}
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
          }}
        id="free-solo-2-demo"
        
        autoHighlight
        freeSolo
        options={currentEmployee}
        getOptionLabel={(option) =>`${option.code}|${option.name}|${option.jobTitle}`}
        renderOption={(option) => (
          <React.Fragment>
            <div className="row  align-items-center justify-content-center">
              <div className="col-md-2">
              <img src={employeeImg} alt="employee-img" style={{width:"70px"}}/>
              </div>
              <div className="col-md-10">
              <p>{(option.code)}|{(option.name)}|{(option.jobTitle)}</p>
              </div>
            </div>
           
          </React.Fragment>
         
        )}

        renderInput={(params) => (
        
          <React.Fragment>
            <div className="input-icons text-muted">
          <TextField
         
            {...params}
            ref={inputRef}
            label="Search Employee Name, Code or Job Title"
            variant="outlined"
            inputProps={{
              ...params.inputProps,
              autoComplete: 'new-password', 
            
            }}
            className="text-field"
            
          />
       <label ref={ulIconRef}  style={{ width: "12%" }} className="text-muted">
                 {!inputValue&& <AiOutlineReload className="reload-icon" />}
                  </label>
                  </div>
    </React.Fragment>
        )}

      />
    </div>
  );
}

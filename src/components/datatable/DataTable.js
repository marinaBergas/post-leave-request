




// export default DataTable
/* eslint-disable no-use-before-define */
import React, { useEffect, useRef, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {AiOutlineReload} from 'react-icons/ai';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import './dataTable.scss'
import { setSearchEmployee } from '../../redux/Employee.action';
const mapState = ({ employee }) => ({
  currentEmployee: employee.currentEmployee,
  searchEmployee: employee.searchEmployee,
});
export default function DataTable() {

  const {  currentEmployee ,searchEmployee} = useSelector(mapState);
  const [value, setValue] = useState({ });
  const ulIconRef = useRef();
  const inputRef = useRef();
  const [inputValue, setInputValue] = useState('');
  // const useStyles = makeStyles({
  //   option: {
  //     fontSize: 15,
  //     '& > span': {
  //       marginRight: 10,
  //       fontSize: 18,
  //     },
  //   },
  // });
  // const classes = useStyles();
  const dispatch = useDispatch();
  console.log("value",value,"inputValue",inputValue)
  useEffect(() => {
  //  dispatch ( setSearchEmployee(value));

  }, [ ])

  return (
    <div style={{ width: "70%" }}>
      <Autocomplete
          onChange={(event, newValue) => {
            setValue(newValue);
            dispatch ( setSearchEmployee(newValue))
          }}
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
          }}
        id="free-solo-2-demo"
        // classes={{
        //   option: classes.option,
        // }}
        autoHighlight
        freeSolo
        options={currentEmployee}
        getOptionLabel={(option) =>`${option.code}|${option.name}|${option.jobTitle}`}
        renderOption={(option) => (
          <React.Fragment>
            <p>{(option.code)}|{(option.name)}|{(option.jobTitle)}</p>
            
          </React.Fragment>
         
        )}

        renderInput={(params) => (
        
          <React.Fragment>
            <div className="input-icons text-muted">
          <TextField
          style={{ width: "70%" }}
            {...params}
            ref={inputRef}
            label="Search Employee Name, Code or Job Title"
            variant="outlined"
            inputProps={{
              ...params.inputProps,
              autoComplete: 'new-password', // disable autocomplete and autofill
            
            }}
            
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

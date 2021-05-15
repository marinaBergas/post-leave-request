// import React, { useEffect, useRef, useState } from 'react'
// import DataTable from '../datatable/DataTable';
// import {  useSelector } from 'react-redux';
// import '../datatable/dataTable.scss';
// import { InputAdornment } from '@material-ui/core';
// import { GrClose } from 'react-icons/gr';
// import {AiOutlineReload} from 'react-icons/ai'
// const mapState = ({ employee }) => ({
//     currentEmployee: employee.currentEmployee,
//   });

// const SearchBar = () => {
//     const {  currentEmployee } = useSelector(mapState);
//     const [q, setQ] = useState('')

//     const inputRef = useRef();
//     const ulIconRef = useRef();

//     function search(rows) {
//       return (rows.filter(row=>row.name.toLowerCase().indexOf(q)>-1 ||row.jobTitle.toLowerCase().indexOf(q)>-1||row.code.toLowerCase().indexOf(q)>-1)
//       )
//     }
 
//     useEffect(() => {
//       ulIconRef.current.addEventListener('click', (event) => {
//         event.stopPropagation();
//         // inputRef.current.style.display = 'none';
//         inputRef.current.value  =``;
//       });
//     }, [])
//     return (
//         <div className="search-container">
          
//             <label >Search the site:</label>
//             <div className="input-icons">
//              <input type="text" 
//              onChange={(e)=>setQ(e.target.value)}
//              ref={inputRef}
//               className="inputSearch"
//                />
//                <label ref={ulIconRef} >
//                  {q && <GrClose className="close-icon" />}
//                  {!q && <AiOutlineReload className="close-icon" />}
//                   </label>
              
//                </div>
//              {inputRef && <DataTable data={(search(currentEmployee))} inputRef={inputRef}/>}

//         </div>
//     )
// }

// export default SearchBar

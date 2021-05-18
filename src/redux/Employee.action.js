
import employeeType from "./Employee.type";



export const setCurrentEmployee = employee =>({
    type : employeeType.SET_CURRENT_EMPLOYEE_DETAILS ,
    payload : employee
});
export const setSearchEmployee = user =>({
    type : employeeType.SET_SEARCH_EMPLOYEE_DETAILS  ,
    payload : user
});
export const setLeavePost = text =>({
    type : employeeType.SET_Leave_post  ,
    payload : text
});



import employeeType from "./Employee.type";



export const setCurrentEmployee = employee =>({
    type : employeeType.SET_CURRENT_EMPLOYEE_DETAILS ,
    payload : employee
});


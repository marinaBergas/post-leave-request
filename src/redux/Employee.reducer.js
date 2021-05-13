import employeeType from "./Employee.type"

const INITIAL_STATE = {
    currentEmployee : [ ] ,
}

const employeeReducer  = (state=INITIAL_STATE,action)=>{
    
    switch(action.type){
        case employeeType.SET_CURRENT_EMPLOYEE_DETAILS :
            return {
                ...state , currentEmployee : action.payload
            }     
    
        default :
        return state    
    }

};
export default employeeReducer 
import employeeType from "./Employee.type"

const INITIAL_STATE = {
    currentEmployee : [ ] ,
    searchEmployee :'',
    leavePost:"submit",
}

const employeeReducer  = (state=INITIAL_STATE,action)=>{
    
    switch(action.type){
        case employeeType.SET_CURRENT_EMPLOYEE_DETAILS :
            return {
                ...state , currentEmployee : action.payload
            }  
            case employeeType.SET_SEARCH_EMPLOYEE_DETAILS :
                return {
                    ...state , searchEmployee : action.payload
                }   
                case employeeType.SET_Leave_post :
                    return {
                        ...state , leavePost : action.payload
                    }    
    
        default :
        return state    
    }

};
export default employeeReducer 
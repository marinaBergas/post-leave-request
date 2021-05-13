import {combineReducers} from 'redux';
import employeeReducer from '../Employee.reducer';


export default combineReducers ({
   employee:employeeReducer,
})
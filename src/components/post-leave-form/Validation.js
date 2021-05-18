const Validation = (values) => {
  let errors = {};
  if (!values["radio1"] && (JSON.stringify(values["radio1"]!="this field is required"))){
    errors.radio1 = "This Field Is Required";
  } 
 
  if (!values["radio2"]){
    errors.radio2 = "This Field Is Required";
 
  } 
  if (!values["stLeaveType"]){
    errors.stLeaveType = "This Field Is Required";
  } 
  if (!values["GuarantorSelect"]){
    errors.GuarantorSelect = "This Field Is Required";
  } 
  if (!values["Replacement"]){
    errors.Replacement = "This Field Is Required";
  } 
  if (!values["Remarks"]){
    errors.Remarks = "This Field Is Required";
  } 
  if (!values["Attchments"]){
    errors.Attchments = "This Field Is Required";
  } 


  return errors;
};

export default Validation;

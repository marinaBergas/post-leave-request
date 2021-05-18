const Validation = (values) => {
  let errors = {};
  if (!values["radio1"] && (JSON.stringify(values["radio1"]!="this field is required"))){
    errors.radio1 = "this field is required";
  } 
 
  if (!values["radio2"]){
    errors.radio2 = "this field is required";
 
  } 
  if (!values["stLeaveType"]){
    errors.stLeaveType = "this field is required";
  } 
  if (!values["GuarantorSelect"]){
    errors.GuarantorSelect = "this field is required";
  } 
  if (!values["Replacement"]){
    errors.Replacement = "this field is required";
  } 
  if (!values["Remarks"]){
    errors.Remarks = "this field is required";
  } 
  if (!values["Attchments"]){
    errors.Attchments = "this field is required";
  } 


  return errors;
};

export default Validation;

import { useState } from "react";
import { ImAttachment } from 'react-icons/im'
import { HiInformationCircle } from 'react-icons/hi'
import './fileUpload.scss'

const FileUploadRe = (e) => {
	let [fileName, setFileName] = useState('')
	let [fileSize, setFileSize] = useState('')
	let [error, setError] = useState('')
	const onChange = (event) => {
		event.preventDefault();
		setFileName(event.target.files[0].name)
		setFileSize(event.target.files[0].size)
		if(fileSize > 1000000){
			setError("File upload size is larger than 1MB");
          }
	}

	return (

		<>
		<div className="input-group" style={{width:"80%"}}>
			<input type="text" className="form-control bg-white " style={{border: "2px solid #ddd",width:"50px"}} readOnly placeholder={fileName}/>
			<div className="input-group-btn">
				<span className="fileUpload btn ">
				<ImAttachment />
					<input type="file" className="upload up" id="up" onChange={onChange} />
				</span>
			</div>
		</div>
         <p className="info-text"><HiInformationCircle/> Max File Size 1 MB</p>
		 <label>{error}</label>
		</>




	)
};



export default FileUploadRe;

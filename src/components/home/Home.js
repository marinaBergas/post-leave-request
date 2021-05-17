import React, { useEffect } from 'react';
import { useDispatch} from 'react-redux';
import { setCurrentEmployee } from '../../redux/Employee.action';
import AnnualLeave from '../annual leave/AnnualLeave';
import HomeSearch from '../datatable/home-search/HomeSearch';
import EmployeeInformation from '../employee search information/EmployeeInformation';
import PostLeaveForm from '../post-leave-form/Form';


const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        async function fetchData(){
          const res =  await fetch('http://localhost:8000/employees')
          const data = await res.json()
            dispatch (setCurrentEmployee(data))
        }
        fetchData();
      }, [])
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-9 col-xs-12">
                        <HomeSearch/>
                        <EmployeeInformation/>
                        <PostLeaveForm/>
                    </div>
                    <div className="col-lg-3 col-xs-12">
                        <AnnualLeave/>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home

import React from 'react'
import AnnualLeave from '../annual leave/AnnualLeave'
import PostLeaveForm from '../post-leave-form/Form'

const Home = () => {
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-9">
                        <PostLeaveForm/>
                    </div>
                    <div className="col-md-3">
                        <AnnualLeave/>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home

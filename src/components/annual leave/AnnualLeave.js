import React from 'react'
import {   Card,  CardBody,
     CardSubtitle} from 'reactstrap';
     import './annual.scss';
const AnnualLeave = () => {
    return (
        <Card className="annual-card">
             <CardSubtitle  tag="h6" className="annual-leave-head m-0  text-capitalize">annual leave balance as on thu,may06,2021</CardSubtitle >
        <CardBody className="pt-0">
        <CardSubtitle  tag="h6" className="annual-leave-title m-1">Annual Leave</CardSubtitle >
          <CardSubtitle tag="h6" className="annual-leave-subtitle text-body mx-2 py-2 text-capitalize ">annual leave entitlement</CardSubtitle>
          <div className="d-flex annual-leave-subtitle  justify-content-between">
            <CardSubtitle tag="h6" className=" text-body mx-2 py-2 annual-leave-subtitle-tw text-capitalize ">annual leave balance</CardSubtitle>
            <CardSubtitle tag="h6" className="text-body mx-2 py-2 text-left annual-leave-subtitle-tw  text-capitalize">day(s)</CardSubtitle>
          </div>
          <div className="d-flex annual-leave-subtitle  justify-content-between">
            <CardSubtitle tag="h6" className=" text-body mx-2 py-2 annual-leave-subtitle-tw text-capitalize ">al bal. till year end</CardSubtitle>
            <CardSubtitle tag="h6" className="text-body mx-2 py-2 text-left annual-leave-subtitle-tw text-capitalize ">day(s)</CardSubtitle>
          </div>
          <CardSubtitle  tag="h6" className="annual-leave-title m-1  text-capitalize">extra days</CardSubtitle >
          <div className="d-flex annual-leave-subtitle  justify-content-between">
            <CardSubtitle tag="h6" className=" text-body mx-2 py-2 annual-leave-subtitle-tw text-capitalize ">extra days balance</CardSubtitle>
            <CardSubtitle tag="h6" className="text-body mx-2 py-2 text-left annual-leave-subtitle-tw  text-capitalize">day(s)</CardSubtitle>
          </div>
          <CardSubtitle  tag="h6" className="annual-leave-title m-1  text-capitalize">sick leaves </CardSubtitle >
          <div className="d-flex justify-content-between">
            <CardSubtitle tag="h6" className=" text-body mx-2 py-2 annual-leave-subtitle-tw text-capitalize ">sick leave(s) taken</CardSubtitle>
            <CardSubtitle tag="h6" className="text-body mx-2 py-2 text-left annual-leave-subtitle-tw  text-capitalize">day(s)</CardSubtitle>
          </div>
          <CardSubtitle  tag="h6" className="annual-leave-title m-1  text-capitalize">unpaid leaves</CardSubtitle >
          <div className="d-flex annual-leave-subtitle  justify-content-between">
            <CardSubtitle tag="h6" className=" text-body mx-2 py-2 annual-leave-subtitle-tw text-capitalize ">unpaid leave taken</CardSubtitle>
            <CardSubtitle tag="h6" className="text-body mx-2 py-2 text-left annual-leave-subtitle-tw  text-capitalize">day(s)</CardSubtitle>
          </div>
          <CardSubtitle  tag="h6" className="annual-leave-title m-1  text-capitalize">leave in progress</CardSubtitle >
          <div className="d-flex annual-leave-subtitle  justify-content-between">
            <CardSubtitle tag="h6" className=" text-body mx-2 py-2 annual-leave-subtitle-tw text-capitalize ">annual leave</CardSubtitle>
            <CardSubtitle tag="h6" className="text-body mx-2 py-2 text-left annual-leave-subtitle-tw  text-capitalize">day(s)</CardSubtitle>
          </div>
          <div className="d-flex annual-leave-subtitle  justify-content-between">
            <CardSubtitle tag="h6" className=" text-body mx-2 py-2 annual-leave-subtitle-tw text-capitalize ">extra days</CardSubtitle>
            <CardSubtitle tag="h6" className="text-body mx-2 py-2 text-left annual-leave-subtitle-tw  text-capitalize">day(s)</CardSubtitle>
          </div>
          <div className="d-flex annual-leave-subtitle  justify-content-between">
            <CardSubtitle tag="h6" className=" text-body mx-2 py-2 annual-leave-subtitle-tw text-capitalize ">sick leaves</CardSubtitle>
            <CardSubtitle tag="h6" className="text-body mx-2 py-2 text-left annual-leave-subtitle-tw  text-capitalize">day(s)</CardSubtitle>
          </div>
          <div className="d-flex annual-leave-subtitle  justify-content-between">
            <CardSubtitle tag="h6" className=" text-body mx-2 py-2 annual-leave-subtitle-tw text-capitalize ">unpaid leaves</CardSubtitle>
            <CardSubtitle tag="h6" className="text-body mx-2 py-2 text-left annual-leave-subtitle-tw  text-capitalize">day(s)</CardSubtitle>
          </div>
        </CardBody>
      </Card>
    )
}

export default AnnualLeave

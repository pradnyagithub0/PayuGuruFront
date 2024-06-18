// src/pages/Account.js
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Dheader from '../Dheader';
import Dfooter from '../Dfooter';
import './Account.css';
import ProfileTopbar from "./commonComponents/ProfileTopbar";
import DashboardTopbar from "./commonComponents/DashboardTopbar";
import useInactivityTimeout from "../../hooks/useInactivityTimeout";

const Account = () => {
  const isInactive = useInactivityTimeout(60000); // 10 minutes
  let navigate = useNavigate();

  useEffect(() => {
    if (isInactive) {
      sessionStorage.removeItem("sessionid");
      navigate("/login");
    }
  }, [isInactive, navigate]);

  return (
    <div>
      <div className="wrapper">
        <Dheader/>
        <div className="main-content">
          <div className="top bg-white mt-0 p-2">
            <DashboardTopbar />
          </div>
          <div className="row">
            <ProfileTopbar />
          </div>
          <div className="row">
            <div className="col-xl-6 col-lg-9 col-md-8 col-12">
              <div className="card pb-0 account-details border-0 shadow-lg">
                <h4 className="bg-transparent mt-0 p-3">Account Settings</h4>
                <div className="card-body p-3">
                  <form action="#">
                    <div className="mb-3">
                      <label className="form-label">Company Name</label>
                      <input type="text" className="form-control" placeholder="Arena Itech" />
                    </div>
                    <label className="form-label">GSTIN of Arena Itech</label>
                    <div className="input-group mb-3">
                      <input type="text" className="form-control" />
                      <span className="input-group-text border-0"><i className="fa fa-pencil"></i></span>
                    </div>
                    <label className="form-label">Billing Address</label>
                    <div className="input-group mb-3">
                      <textarea type="text" className="form-control" placeholder="" rows="3"></textarea>
                      <span className="input-group-text border-0"><i className="fa fa-pencil"></i></span>
                    </div>
                  </form>	
                </div>
              </div>
            </div>
          </div>
          <Dfooter/>   
        </div>
      </div>
    </div>
  );
};

export default Account;

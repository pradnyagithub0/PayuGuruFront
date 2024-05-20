import React from "react";
import Dheader from '../Dheader';
import Dfooter from '../Dfooter';
import './Api.css';


function Api(){
    return(
        <div>
       
            
        <div className="wrapper">
        <Dheader/>
                <div className="main-content">
                    <div className="top bg-white mt-0 p-2">
                        <div className="row mt-0">
                            <div className="col-lg-9 col-md-9 col-12">
                                <p className="text-dark float-left"><i className="fa fa-info-circle"></i> Your account is pending activation. Please submit your documents to payuguru.com</p>
                            </div>
                            <div className="col-lg-3 col-md-3 col-12">
                                <button type="button" className="btn btn-top">Docs Required</button>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 mt-3">
                            <a href="/account" className="btn btn1 virtual-btn">Account</a>
                            <a href="/api" type="button" className="btn btn1 virtual-btn active">API</a>
                            <a href="/webhook" type="button" className="btn btn1 virtual-btn">Webhooks</a>
                            <a href="/userprofile" type="button" className="btn btn1 virtual-btn">User Profile</a>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xl-6 col-lg-9 col-md-8 col-12">
                            <div className="card pb-0 account-details border-0 shadow-lg">
                                <h4 className="bg-transparent mt-0 p-3">API Settings</h4>
                                <div className="card-body p-3">
                                    <form action="#">
                                        <label className="form-label">API Token</label>
                                        <div className="input-group mb-3">
                                            <input type="text" className="form-control" placeholder="5855556a-586b-4048-b8d3-161f6a95d91f"/>
                                            <span className="input-group-text border-0"><i className="fa fa-copy"></i></span>
                                        </div>

                                        <label className="form-label">Whitelisted IPs</label>
                                        <div className="mb-3">
                                            <p className="text-secondary">Configure which IP Addresses can access your account.</p>
                                        </div>
                                        <a type="button" className="btn btn1 float-right virtual-btn bg-red mb-5">Add API Address</a>
                                    </form>	
                                </div>
                            </div>
                        </div>
                    </div>

                    
                    <Dfooter/> 
                </div>
                
            </div>
        </div>
    )
}
export default Api;
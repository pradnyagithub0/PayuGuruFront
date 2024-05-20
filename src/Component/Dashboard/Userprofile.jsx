import React from "react";
import Dheader from '../Dheader';
import Dfooter from '../Dfooter';
import './Userprofile.css';


function Userprofile(){
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
                            <a href="/api" type="button" className="btn btn1 virtual-btn ">API</a>
                            <a href="/webhook" type="button" className="btn btn1 virtual-btn ">Webhooks</a>
                            <a href="/userprofile" type="button" className="btn btn1 virtual-btn active">User Profile</a>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-10 col-md-10 col-12">
                            <div className="card pb-0 account-details border-0 shadow-lg">
                                <div className="col-lg-8 col-md-8 col-12">
                                    <h3 className=" mt-0 p-3">User Profile</h3>
                                    <div className="card-body p-3">
                                        <form action="#" className="user_profile">
                                            <table className="table table-borderless ">
                                                <tbody>
                                                    <tr>
                                                        <th>Email :</th>
                                                        <td>info@arenaitech.com</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Role :</th>
                                                        <td>Admin</td>
                                                    </tr>
                                                    <tr>
                                                        <th>2FA : </th>
                                                        <td>
                                                            <div className="float-left">
                                                            <input  type="checkbox" id="switch" /><label for="switch" className="toggle mr-3">Toggle</label>
                                                            </div>
                                                            <a type="button" className="btn btn1 btn-outline-secondary virtual-btn "><i className="fa fa-info-circle mr-3"></i>How to setup 2FA</a>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <label className="form-label" for="name">Name</label>
                                            <div className="input-group mb-3  input-info">
                                                <input type="text" className="form-control" id="name" aria-label="Name"/>
                                                <span className="input-group-text border-0"><i className="fa fa-pencil"></i></span>
                                            </div>
                                            <a type="button" className="btn btn1 btn-outline-secondary virtual-btn "><i className="fa fa-lock mr-3"></i>Change Account Password</a>
                                        </form>	
                                    </div>
                                </div>
                                <hr></hr>
                                <div className="col-lg-8 col-md-8 col-12">
                                    <h3 className=" mt-0 p-3">Email Subscription</h3>
                                    <div className="card-body p-3">
                                        <form action="#">
                                            <div className="row mb-3">
                                                <div className="col-lg-8 col-8">
                                                <h6>Funds Added</h6>
                                                </div>

                                                <div className="col-lg-4 col-4">
                                                <input  type="checkbox" id="switch1" /><label for="switch1" className="toggle">Toggle</label>
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <div className="col-lg-8 col-8">
                                                <h6>Low Balance Alert</h6>
                                                </div>

                                                <div className="col-lg-4 col-4">
                                                <input  type="checkbox" id="switch2" /><label for="switch2" className="toggle">Toggle</label>
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <div className="col-lg-8 col-8">
                                                <h6>UPI Prefix Approval</h6>
                                                </div>

                                                <div className="col-lg-4 col-4">
                                                <input  type="checkbox" id="switch3" /><label for="switch3" className="toggle">Toggle</label>
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <div className="col-lg-8 col-8">
                                                <h6>Login Alert</h6>
                                                </div>

                                                <div className="col-lg-4 col-4">
                                                <input  type="checkbox" id="switch4" /><label for="switch4" className="toggle">Toggle</label>
                                                </div>
                                            </div>
                                        </form>	
                                    </div>
                                </div>
                                <hr></hr>
                                <h3 className=" mt-0 p-3">Active Sessions(3)</h3>
                                <div className="card-body p-0">
                                    <div className="table-responsive">
                                        <table className="table table-striped table-bordered " >
                                            <thead className="bg-light">
                                                <tr>
                                                    <th scope="col">Last Login</th>
                                                    <th scope="col">IP Address</th>
                                                    <th scope="col">IP Address</th>
                                                    <th scope="col">OS</th>
                                                    <th scope="col">Browswer</th>
                                                    <th scope="col"></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>10-Jan-2023,02:18 pm</td>
                                                    <td>203.194.107.163</td>
                                                    <td>Windows 10.0</td>
                                                    <td>Chrome</td>
                                                    <td>Current Session</td>
                                                </tr>
                                                <tr>
                                                    <td>06-Jul-2020,04:33 pm</td>
                                                    <td>42.106.100.72</td>
                                                    <td>Windows 10.0</td>
                                                    <td>Firefox</td>
                                                    <td className="text-danger"><i className="fa fa-sign-out text-danger"></i> Logout</td>
                                                </tr>
                                                <tr>
                                                    <td>07-Jul-2020,06:49 pm</td>
                                                    <td>14.96.96.127</td>
                                                    <td>Windows 10.0</td>
                                                    <td>Chrome</td>
                                                    <td className="text-danger"><i className="fa fa-sign-out text-danger"></i> Logout</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>       
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

export default Userprofile;
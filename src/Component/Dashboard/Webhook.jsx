import React from "react";
import Dheader from '../Dheader';
import Dfooter from '../Dfooter';
import './Webhook.css';

function Webhook(){
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
                            <a href="/webhook" type="button" className="btn btn1 virtual-btn active">Webhooks</a>
                            <a href="/userprofile" type="button" className="btn btn1 virtual-btn">User Profile</a>	
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xl-8 col-lg-12 col-md-12 col-12">
                            <div className="card pb-0 account-details border-0 shadow-lg">
                                <h3 className=" mt-0 p-3">Webhooks Settings</h3>
                                <div className="card-body p-3">
                                    <form action="#" className="user_profile">
                                        <div className="table-responsive">
                                            <table className="table table-borderless">
                                                <tbody>
                                                    <tr>
                                                        <th>Credit UPI</th>
                                                        <td>NOT_CONFIGURED</td>
                                                        <td>
                                                            <div className="d-flex float-right">
                                                                <a type="button" className="btn btn1 btn-outline-secondary mr-2 "><i className="fa fa-wrench mr-2"></i>configure</a>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th>Credit Virtual Account</th>
                                                        <td>BLOCKED</td>
                                                        <td>
                                                            <div className="d-flex float-right">
                                                                <a type="button" className="btn btn1 btn-outline-secondary mr-2"><i className="fa fa-pencil mr-2"></i>Edit</a>
                                                                <a type="button" className="btn btn1 btn-outline-secondary text-danger mr-2"><i className="fa fa-times mr-2"></i>Disable</a>
                                                                <a type="button" className="btn btn1 btn-outline-secondary text-success mr-2"><i className="fa fa-check mr-2"></i>Enable</a>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th>Bank Account Verification</th>
                                                        <td>NOT_CONFIGURED</td>
                                                        <td>
                                                            <div className="d-flex float-right">
                                                                <a type="button" className="btn btn1 btn-outline-secondary mr-2 "><i className="fa fa-wrench mr-2"></i>configure</a>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th>Funds Added</th>
                                                        <td>ENABLED</td>
                                                        <td>
                                                            <div className="d-flex float-right">
                                                                <a type="button" className="btn btn1 btn-outline-secondary mr-2"><i className="fa fa-pencil mr-2"></i>Edit</a>
                                                                <a type="button" className="btn btn1 btn-outline-secondary text-danger mr-2"><i className="fa fa-times mr-2"></i>Disable</a>
                                                        </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th>Funds Transfer Status</th>
                                                        <td>ENABLED</td>
                                                        <td>
                                                            <div className="d-flex float-right">
                                                                <a type="button" className="btn btn1 btn-outline-secondary mr-2"><i className="fa fa-pencil mr-2"></i>Edit</a>
                                                                <a type="button" className="btn btn1 btn-outline-secondary text-danger mr-2"><i className="fa fa-times mr-2"></i>Disable</a>
                                                        </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th>Low Balance Alert</th>
                                                        <td>NOT_CONFIGURED</td>
                                                        <td>
                                                            <div className="d-flex float-right">
                                                                <a type="button" className="btn btn1 btn-outline-secondary mr-2 "><i className="fa fa-wrench mr-2"></i>configure</a>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th>UPI ID Verification</th>
                                                        <td>NOT_CONFIGURED</td>
                                                        <td>
                                                            <div className="d-flex float-right">
                                                                <a type="button" className="btn btn1 btn-outline-secondary mr-2 "><i className="fa fa-wrench mr-2"></i>configure</a>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th>UPI Collection Status</th>
                                                        <td>NOT_CONFIGURED</td>
                                                        <td>
                                                            <div className="d-flex float-right">
                                                                <a type="button" className="btn btn1 btn-outline-secondary mr-2 "><i className="fa fa-wrench mr-2"></i>configure</a>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th>Invali VA Credit</th>
                                                        <td>NOT_CONFIGURED</td>
                                                        <td>
                                                            <div className="d-flex float-right">
                                                                <a type="button" className="btn btn1 btn-outline-secondary mr-2 "><i className="fa fa-wrench mr-2"></i>configure</a>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
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
    )
}

export default Webhook;
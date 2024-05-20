import React from 'react';
import Dheader from '../Dheader';
import Dfooter from '../Dfooter';
import './Reports.css';



function Reports(){
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
                        <div className="col-lg-12 col-md-12 col-12">
                            <div className="card pb-0 account-details border-0 shadow-lg">
                                <div className="row">
                                    <div className="col-lg-4 col-md-4 col-12">
                                        <h4 className="bg-transparent mt-0 p-3">Reports</h4>
                                    </div>
                                    <div className="col-lg-8 col-md-8 col-12">
                                        <div className="mt-0 p-3 d-flex float-right btn-left">
                                            <a type="button" className="btn bg-dark text-white mr-2">Export Transaction<i className="fa fa-external-link ml-2"></i></a>
                                    </div>
                                    </div>
                                </div>
                                <div className="card-body p-0">
                                    <div className="table-responsive">
                                        <table className="table table-striped table-bordered " >
                                            <thead className="bg-light">
                                                <tr>
                                                    <th>ID</th>
                                                    <th>Report Type</th>
                                                    <th>Filters</th>
                                                    <th>Status</th>
                                                    <th>Download</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>45788</td>
                                                    <td>virtual_account_export</td>
                                                    <td>Data Range:2020-07-01 to 2022-09-30</td>
                                                    <td>Completed</td>
                                                    <td><a href="">Download</a></td>
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

export default Reports;
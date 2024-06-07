import React, { useEffect, useState } from "react";
import Dheader from "../Dheader";
import Dfooter from "../Dfooter";
import "./Upi.css";
import DashboardTopbar from "./commonComponents/DashboardTopbar";
import UpiListTable from "./commonComponents/UpiListTable";
import { ENDPOINTS } from "../../utils/apiConfig";
import Pagination from "../Pagination";

function Upi(){
    return(
        <div>
            <div className="wrapper">
               <Dheader/>
                <div className="main-content">
                    <div className="top bg-white mt-0 p-2">
                        <DashboardTopbar />
                    </div>

                    <div className="row">
                    <div className="col-lg-12 col-md-12 col-12">
                        <div className="card pb-0 account-details border-0 shadow-lg">
                        	<div className="row">
                        		<div className="col-xl-4 col-lg-12 col-md-12 col-12">
                        			<h4 className="bg-transparent mt-0 p-3">UPIs</h4>
                        		</div>
                        		<div className="col-xl-8 col-lg-12 col-md-12 col-12">
	                        		<div className="ml-auto mt-0 p-3 d-flex float-right">
	                        			<div className="wrap upi-wrap">
										   	<div className="search mt-3">
										      	<input type="text" className="searchTerm" placeholder="Search ID/Ref Number"/>
										      	<button type="submit" className="searchButton" aria-label="Search">
										        	<i className="fa fa-search"></i>
										     	</button>
										   	</div>
										</div>
										<div className="mx-auto text-center mt--40">
											<a type="button" className="btn btn1 mt-15  btn-outline-secondary mr-2">UPI Prefixes<i className="fa fa-address-book ml-2"></i></a>
							                <a type="button" className="btn btn1 mt-15 btn-outline-secondary mr-2">Create UPI<i className="fa fa-plus ml-2"></i></a>
							                <a type="button" className="btn btn1 mt-15 btn-outline-secondary mr-2">Export <i className="fa fa-external-link ml-2"></i></a>
							                <a type="button" className="btn btn1 mt-15 bg-dark text-white mr-2">Fiter <i className="fa fa-filter ml-2"></i></a>
						                </div>
						            </div>
						        </div>
                        	</div>
                        	<div className="card-body p-0">
	                        	<div className="table-responsive">
			                        <table className="table table-striped table-bordered " >
								        <thead className="bg-light">
								            <tr>
								                <th>ID</th>
									            <th>UPI</th>
									            <th>Credit Time</th>
									            <th>Name</th>
									            <th>PAN</th>
									            <th>Category</th>
									            <th>Status</th>
								            </tr>
								        </thead>
								        <tbody>
								            <tr>
								                <td></td>
									            <td></td>
									            <td></td>
									            <td></td>
									            <td></td>
									            <td></td>
									            <td></td>
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

export default Upi;

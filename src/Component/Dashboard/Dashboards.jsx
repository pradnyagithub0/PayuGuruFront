import React  from "react";
import './Dashboards.css';
import Dheader from '../Dheader';
import Dfooter from '../Dfooter';

function Dashboard() {
<<<<<<< HEAD
    return(
        <div>
			<div className="wrapper">
			<Dheader/>	
				<div className="main-content">
					<div className="top bg-white rounded-lg p-2">
					<div className="row mt-0">
							<div className="col-lg-9 col-md-9 col-12">
								<p className="text-dark float-left"><i className="fa fa-info-circle"></i> Your account is pending activation. Please submit your documents to payuguru.com</p>
							</div>
							<div className="col-lg-3 col-md-3 col-12">
								<button type="button" className="btn btn-top" data-bs-toggle="modal" data-bs-target="#docsReqModal">Docs Required</button>
							</div>
						</div>
					</div>
=======
  const dash_index = ENDPOINTS.DASH_BOARD;
  const add_upi = ENDPOINTS.CREATE_UPI_ID;
  const add_acc = ENDPOINTS.CREATE_VIRTUAL_BANK_ACCOUNT;
  const sessionid = sessionStorage.getItem("sessionid");
  const [loader, setLoader] = useState(false);
  const [dashboardIndex, setDashboardIndex] = useState({});
  const [upiID, setUpiId] = useState("");
  const [accountDetails, setAccountDetials] = useState({});
  console.log(dashboardIndex.mainBalance);
>>>>>>> 2592c66d708b42a43fcf608c93a382057a1e79b9

					<div className="row">
						<div className="card account-card mt-4">
							<div className="card-body" >
								<div className="row">
									<div className="col-lg-9 col-md-9 col-12 my-auto">
										<p>Account Balance</p>
										<h3>₹ 39,782.68</h3>
									</div>
									<div className="col-lg-3 col-md-3 col-12">
										<div className="img-bg" >
											<img src="https://i.ibb.co/Fx8FHCd/account-card-img.png" alt="account-card-img"/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="row">
						<div className="col-lg-4 col-md-4 col-12">
							<button type="button" className="btn btn-light-blue"><i className="fa fa-plus"></i> Add New Account</button>
						</div>
						<div className="col-lg-4 col-md-4 col-12">
							<button type="button" className="btn btn-light-grey"><i className="fa fa-user"></i> Settlements</button>
						</div>
						<div className="col-lg-4 col-md-4 col-12">
							<button type="button" className="btn btn-light-pink"><i className="fa fa-plus"></i> Add New UPI ID</button>
						</div>
					</div>

					<div className="row">
						<div className="col-lg-12 col-md-12 col-12">
							<div className="card pb-0 account-details border-0 shadow-lg">
								<h4 className="card-header mt-0 py-3">Transfer funds to the following account to use PayUGuru</h4>
								<div className="card-body p-0 table-responsive">
									<table className="table table-borderless account-table">
										<tbody>
											<tr>
												<td>Company Name:<b> Arena Itech</b></td>
												<td>Modes UPI/IMPS/NEFT/RTGS</td>
											</tr>
											<tr >
												<td>A/C No:<b> 708090731181</b> <i className="fa fa-copy"></i></td>
												<td>UPI ID:<b> xxxxxxxx@cccc</b></td>
											</tr>
											<tr>
												<td>IFSC:<b> YESB0CMSN0C</b> <i className="fa fa-copy"></i></td>
												<td></td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>

					<div className="row">
						<div className="col-lg-12 col-md-12 col-12">
							<div className="card pb-0 account-details border-0 shadow-lg">
								<div className="card-header">
									<div className="row">
										<div className=" col-xl-4 col-lg-4 col-md-12 col-12">
											<h5 className="font-weight-bold mt-0">Account Statement</h5>
										</div>
										<div className="col-xl-8 col-lg-8 col-md-12 col-12 ">
											<p className="float-right">*Date: 8 Nov-23, 0:00:00 to 2 Dec-23, 23:59:59</p>
										</div>	
									</div>
								</div>
								<div className="card-body p-2">
									<div className="table-responsive">
										<table id="example" className="table table-striped table-bordered " >
											<thead>
												<tr>
													<th>ID</th>
													<th>Transaction Time</th>
													<th>Transaction Type</th>
													<th>Payment Mode</th>
													<th>Transaction Amount</th>
													<th>Fess & GST</th>
													<th>Settlement Amount</th>
													<th>Closing Amount</th>
													<th>Credit/Debit</th>
													<th>Status</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>79214204</td>
													<td>5: 40 am</td>
													<td>Time Activity</td>
													<td>Visa</td>
													<td>₹ 5,600.00</td>
													<td>₹ 1.23</td>
													<td>₹ 2,500.00</td>
													<td>₹ 3,666.71</td>
													<td>₹ 855.00</td>
													<td>closed</td>
												</tr>
												<tr>
													<td>79212231</td>
													<td>7: 30 am</td>
													<td>Credit Memo</td>
													<td>Paypal</td>
													<td>₹ 16,500.00</td>
													<td>₹ 5.33</td>
													<td>₹ 16,500.00</td>
													<td>₹ 102.00</td>
													<td>₹ 232,000.00</td>
													<td>closed</td>
												</tr>
												<tr>
													<td>79214079</td>
													<td>8: 20 am</td>
													<td>Invoice</td>
													<td>Mastedcard</td>
													<td>₹ 1,380.00</td>
													<td>₹ 2.33</td>
													<td>₹ 349.00</td>
													<td>₹ 16,500.00</td>
													<td>₹ 349.00</td>
													<td>Overdue</td>
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
			
			<div className="modal fade docReqModal" id="docsReqModal"  				  	aria-labelledby="docsReqModalLabel" aria-hidden="false">
				<div className="modal-dialog modal-xl">
					<div className="modal-content docsReqModal-content">
					<div className="modal-header">
						<h1 className="modal-title fs-5" id="docsReqModalLabel">Your account is pending Activation!</h1>
						<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div className="modal-body modalBodySection">
						<div className="text-center mb-3">
							<h6>Your account is pending activation.</h6>
							<p>Please submit your document to <a href="#"> verify@payuguru.in </a> for activating your pay u guru account. you can also chat with our support team and share your documents.</p>
						</div>
						<div className="table-responsive">
							<table className="table table-striped reqDocsModalBorder">
								<thead className="reqDocsModalBorder">
									<tr className="reqDocsModalBorder">
										<th className="reqDocsModalBorder">Private/public limited companies</th>
										<th className="reqDocsModalBorder">Partnership firms</th>
										<th className="reqDocsModalBorder">Propriotership firm</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>certificate of incorporation</td>	
										<td>Registration certificate</td>	
										<td>Registration certificate</td>	
									</tr>
									<tr>
										<td>Company PAN card</td>	
										<td>Company PAN card</td>	
										<td></td>	
									</tr>
									<tr>
										<td>Company cancelled cheque</td>	
										<td>Company cancelled cheque</td>	
										<td>Company cancelled cheque</td>	
									</tr>
									<tr>
										<td>Company GST (optional) </td>	
										<td>Company GST (optional) </td>	
										<td>Company GST </td>	
									</tr>
									<tr>
										<td>AoA & MoA</td>	
										<td>Partnership deed</td>	
										<td></td>	
									</tr>
									<tr>
										<td>Authorized Signatory PAN card</td>	
										<td>Partner PAN card</td>	
										<td>Proprioter PAN card</td>	
									</tr>
									<tr>
										<td>Authorized Signatory Aadhaar card</td>	
										<td>Partner Aadhaar card</td>	
										<td>Proprioter Aadhaar card</td>
									</tr>
									<tr>
										<td>Business details</td>	
										<td>Business details</td>	
										<td>Business details</td>
									</tr>
									<tr>
										<td>Website</td>	
										<td>Website</td>	
										<td>Website</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<div className="modal-footer">
						<button type="button" className="btn btn-secondary btn-sm" data-bs-dismiss="modal">Close</button>
					</div>
					</div>
				</div>
			</div>

        </div>
    )


}
export default Dashboard; 
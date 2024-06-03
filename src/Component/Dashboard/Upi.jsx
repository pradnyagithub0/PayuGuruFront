import React, { useState, useEffect } from 'react';
import Dheader from '../Dheader';
import Dfooter from '../Dfooter';
import './Upi.css';
import DashboardTopbar from "./commonComponents/DashboardTopbar";
import UpiListTable from "./commonComponents/UpiListTable"; // Adjust the path as necessary
import { ENDPOINTS } from '../../utils/apiConfig';
import Pagination from '../Pagination';


function Upi(){
	const [upiList, setUpiList] = useState([]);
	const sessionid = sessionStorage.getItem("sessionid");
	const [loader, setLoader] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 10;
	const [totalItems, setTotalItems] = useState(0);
  
	// Function to fetch the data
	const fetchData = async (page = 1) => {
	  setLoader(true);
	  
	  try {
		const currentDate = new Date().toISOString();
		const startDate = new Date();
		startDate.setDate(startDate.getDate() - 7); // Adjust range as needed
		const startDateISO = startDate.toISOString();//'2024-06-03T10:05:42.699+00:00'; //startDate.toISOString();
		const response = await fetch(ENDPOINTS.GET_UPI_LIST, {
		  method: "POST",
		  headers: {
			accept: "application/json",
			"Content-Type": "application/json",
		  },
		  body: JSON.stringify({
			range: [startDateISO, currentDate],
			pagination: {
			  skip: (page - 1) * itemsPerPage,
			  limit: itemsPerPage,
			},
			sessionid: sessionid,
		  }),
		});
		
		const messData  = await response.text();
		const resData = messData.split('[');
		// console.log(JSON.stringify(resData[1]));
		let dataA = JSON.stringify(resData[1].replace(']',''))
		// console.log("{'upi_list':"+'['+JSON.parse(dataA)+']}')
		// console.log(messData.match('mess').input.search('StatusCodes'));
		setLoader(false);
		setUpiList(JSON.parse('['+JSON.parse(dataA)+']'));
		setTotalItems(JSON.parse('['+JSON.parse(dataA)+']').length);
		// if (messData.match('mess').length >= 0) {
		//   if (messData.match('mess').input.search('StatusCodes') === "DK00") {
		// 	setUpiList(JSON.parse('['+JSON.parse(dataA)+']'));
		//   } else {
		// 	console.log(messData.match('mess').input.search('StatusCodes'));
		// 	alert(messData.match('mess').map(m => m.message));
		//   }
		// }
	  } catch (error) {
		setLoader(false);
		console.error("Error:", error);
	  }
	};

	const toggleStatus = async (account) => {
		const updatedStatus = account.upistatus === 'Y' ? 'N' : 'Y';
		try {
		let accountId = account.upi_id;
		  const response = await fetch(ENDPOINTS.UPDATE_UPI_ID_STATUS, {
			method: 'POST',
			headers: {
			  accept: 'application/json',
			  'Content-Type': 'application/json',
			},
			body: JSON.stringify({
			  upi_id: accountId,
			  upistatus: updatedStatus,
			  sessionid: sessionid,
			}),
		  });
	
		  const resData = await response.json();
		  if (resData.mess && resData.mess.StatusCodes === 'DK00') {
			fetchData(currentPage); // Refresh the data after updating the status
		  } else {
			console.log(resData.mess.message);
			// alert(resData.mess.message);
		  }
		} catch (error) {
		  console.error('Error:', error);
		}
	  };
  
	// Fetch data on component mount
	useEffect(() => {
		fetchData(currentPage);
	  }, [currentPage]);
	
	  const handlePageChange = (newPage) => {
		setCurrentPage(newPage);
	  };
  
  
	return (
	  <div>
		<div className="wrapper">
		  <Dheader />
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
							<input type="text" className="searchTerm" placeholder="Search ID/Ref Number" />
							<button type="submit" className="searchButton" aria-label="Search">
							  <i className="fa fa-search"></i>
							</button>
						  </div>
						</div>
						<div className="mx-auto text-center mt--40">
						  <a type="button" className="btn btn1 mt-15 btn-outline-secondary mr-2">UPI Prefixes<i className="fa fa-address-book ml-2"></i></a>
						  <a type="button" className="btn btn1 mt-15 btn-outline-secondary mr-2">Create UPI<i className="fa fa-plus ml-2"></i></a>
						  <a type="button" className="btn btn1 mt-15 btn-outline-secondary mr-2">Export <i className="fa fa-external-link ml-2"></i></a>
						  <a type="button" className="btn btn1 mt-15 bg-dark text-white mr-2">Filter <i className="fa fa-filter ml-2"></i></a>
						</div>
					  </div>
					</div>
				  </div>
				  <div className="card-body p-0">
					<div className="table-responsive">
					  <UpiListTable data={upiList}  toggleStatus={toggleStatus}/>
					  <Pagination
                      currentPage={currentPage}
                      itemsPerPage={itemsPerPage}
                      totalItems={totalItems}
                      onPageChange={handlePageChange}
                    />
					  
					  {/* <Pagination
										currentPage={currentPage}
										itemsPerPage={itemsPerPage}
										totalItems={upiList.length}
										onPageChange={handlePageChange}
									/> */}
					</div>
				  </div>
				</div>
			  </div>
			</div>
			<Dfooter />
		  </div>
		</div>
	  </div>
	);
}

export default Upi;
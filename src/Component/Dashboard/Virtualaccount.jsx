import React, {useEffect,useState} from "react";
import Dheader from '../Dheader';
import Dfooter from '../Dfooter';
import './Virtualaccount.css';
import DashboardTopbar from "./commonComponents/DashboardTopbar";
import VirtualAccountTable from "./commonComponents/VirtualAccountTable"; // Adjust the path as necessary
import { ENDPOINTS } from '../../utils/apiConfig';
import Pagination from '../Pagination';

function VirtualAccount(){
	const [acList, setAcList] = useState([]);
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
		const startDateISO = startDate.toISOString();
		const response = await fetch(ENDPOINTS.GET_VIRTUAL_ACCOUNT_LIST, {
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
		console.log(messData)
		const resData = messData.split('[');
		console.log(JSON.stringify(resData[1]));
		let dataA = JSON.stringify(resData[1].replace(']',''))
		console.log("{'virtual_account_list':"+'['+JSON.parse(dataA)+']}')
		console.log(messData.match('mess').input.search('StatusCodes'));
		setLoader(false);
		setAcList(JSON.parse('['+JSON.parse(dataA)+']'));
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
  
	// Fetch data on component mount
	useEffect(() => {
		fetchData(currentPage);
	  }, [currentPage]);
	
	  const handlePageChange = (newPage) => {
		setCurrentPage(newPage);
	  };
  

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
                        		<div className=" col-xl-4 col-lg-12 col-md-12 col-12">
                        			<h4 className="bg-transparent mt-0 p-3">Virtual Accounts</h4>
                        		</div>
                        		<div className="col-xl-8 col-lg-12 col-md-12 col-12">
	                        		<div className="mt-0 p-3 d-flex float-right">
	                        			<div className="wrap wrap1">
										   	<div className="search mt-3">
										      	<input type="text" className="searchTerm" placeholder="Search ID/Ref Number"/>
										      	<button type="submit" className="searchButton" aria-label="Search">
										        	<i className="fa fa-search"></i>
										     	</button>
										   	</div>
										</div>
										<div className="mx-auto text-center mt--40">
							                <a type="button" className="btn btn1 mr-2 mt-15 btn-outline-secondary">Add Virtual Account<i className="fa fa-plus ml-2"></i></a>
							                <a type="button" className="btn btn1 mt-15 mr-2 btn-outline-secondary">Export <i className="fa fa-external-link ml-2"></i></a>
							                <a type="button" className="btn btn1 bg-dark mt-15 text-white mr-2">Fiter <i className="fa fa-filter ml-2"></i></a>
						                </div>
						            </div>
						        </div>
                        	</div>
                        	<div className="card-body p-0">
	                        	<div className="table-responsive">
			                        {/* <table className="table table-striped table-bordered " >
								        <thead className="bg-light">
								            <tr>
								                <th>ID</th>
									            <th>Credit Time</th>
									            <th>Reference Number</th>
									            <th>UDF1</th>
									            <th>UDF2</th>
									            <th>UDF3</th>
									            <th>Status</th>
								            </tr>
								        </thead>
								        <tbody>
								            <tr>
								                <td>3905921</td>
									            <td>2021-6-04 16:03:18</td>
									            <td>94764</td>
									            <td>Asif Malkani</td>
									            <td>Tech Genie</td>
									            <td></td>
									            <td>Active</td>
									        </tr>
									        <tr>
								                <td>3905074</td>
									            <td>2021-6-03 12:47:32</td>
									            <td>1</td>
									            <td>Smart product shop</td>
									            <td>Smart product shop</td>
									            <td></td>
									            <td>Active</td>
									        </tr>
								        </tbody>
								    </table> */}
									 <VirtualAccountTable data={acList} />

									<Pagination
									currentPage={currentPage}
									itemsPerPage={itemsPerPage}
									totalItems={totalItems}
									onPageChange={handlePageChange}
									/>
									 {/* <Pagination
										currentPage={currentPage}
										itemsPerPage={itemsPerPage}
										totalItems={acList.length}
										onPageChange={handlePageChange}
									/> */}
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

export default VirtualAccount;
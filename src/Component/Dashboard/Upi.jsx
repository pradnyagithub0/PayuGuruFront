/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useCallback } from "react";
import Dheader from "../Dheader";
import Dfooter from "../Dfooter";
import "./Upi.css";
import DashboardTopbar from "./commonComponents/DashboardTopbar";
import UpiListTable from "./commonComponents/UpiListTable";
import { ENDPOINTS } from "../../utils/apiConfig";
import Pagination from "../Pagination";
import axios from "axios";

function Upi() {
  const [upiList, setUpiList] = useState([]);
  const sessionid = sessionStorage.getItem("sessionid");
  const [loader, setLoader] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(100);
  const [isFetching, setIsFetching] = useState(false);
  const [searchText, setSearchText] = useState("");

  const fetchData = useCallback(async (page = 1, loadMore = false) => {
    setLoader(true);
    try {
      const currentDate = new Date().toISOString();
      const startDate = new Date();
      startDate.setDate(startDate.getDate() - 30); // Adjust range as needed
      const startDateISO = startDate.toISOString();
      const response = await axios.post(ENDPOINTS.GET_UPI_LIST, {
        range: [startDateISO, currentDate],
        pagination: {
          skip: (page - 1) * itemsPerPage,
          limit: itemsPerPage,
        },
        sessionid: sessionid,
      });
      setLoader(false);

      const responseData = response.data;

      console.log('Result: ', responseData.data);

      const resDataT = responseData.split('[');
      const resDataPg = responseData.split(',');
      let dataCount = resDataPg[3].replace(/\\/g, '');
      let dataCurentP = resDataPg[4].replace(/\\/g, '').replace('}', '');
      console.log('Count data: ', dataCount.replace('"totalCount":', ""));
      console.log('Pagination data: ', dataCurentP.replace('"currentPage":', ""));
      var dataT = JSON.stringify(resDataT[1].replace(']', ''))
      setTotalItems(dataCount.replace('"totalCount":', ""));
      setItemsPerPage(responseData.itemsPerPage);

      setCurrentPage(dataCurentP.replace('"currentPage":', ""));

      const parsedData = JSON.parse('[' + JSON.parse(dataT) + ']');

      if (!loadMore) {
        setUpiList(parsedData.slice(0, itemsPerPage));
      } else {
        setUpiList((prevList) => [...prevList, ...parsedData]);
      }
    } catch (error) {
      setLoader(false);
      console.error("Error:", error);
    }
  }, [sessionid, itemsPerPage]);

  const toggleStatus = async (account) => {
    const updatedStatus = account.upistatus === 'Y' ? 'N' : 'Y';
    try {
      let upiID = account.upi_id;
      const response = await fetch(ENDPOINTS.UPDATE_UPI_ID_STATUS, {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          upi_id: upiID,
          upistatus: updatedStatus,
          sessionid: sessionid,
        }),
      });

      const resData = await response.json();
      if (resData.mess && resData.mess.StatusCodes === 'DK00') {
        fetchData(currentPage); // Refresh the data after updating the status
      } else {
        // Handle error
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    fetchData(1);
  }, [fetchData]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight && !isFetching) {
        setIsFetching(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isFetching]);

  useEffect(() => {
    if (!isFetching) return;
    fetchData(currentPage + 1, true).then(() => {
      setIsFetching(false);
    });
  }, [isFetching, fetchData, currentPage]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    fetchData(newPage);
  };

  const handleSearchUpi = async () => {
    setLoader(true);
  
    try {
      const response = await fetch(ENDPOINTS.SEARCH_UPI_ID, {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sessionid: sessionid,
          upi_id: searchText,
        }),
      });
  
      const resData = await response.json();
      setLoader(false);
  
      if (resData.StatusCodes) {
        if (resData.StatusCodes === "00") {
          // Convert the single object response to an array
          const responseArray = [resData.responsed];
          setUpiList(responseArray);
        } else {
          console.log(resData.mess.message);
        }
      }
    } catch (error) {
      setLoader(false);
      console.error("Error during account search:", error);
    }
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
                          <input
                            type="text"
                            className="searchTerm"
                            placeholder="Search ID/Ref Number"
                            value={searchText}
                            onChange={(e) => {
                              setSearchText(e.target.value);
                            }}
                          />
                          <button
                            type="submit"
                            className="searchButton"
                            aria-label="Search"
                            onClick={() => {
                              console.log(searchText);
                              handleSearchUpi();
                            }}
                          >
                            <i className="fa fa-search"></i>
                          </button>
                        </div>
                      </div>
                      <div className="mx-auto text-center mt--40">
                        <a
                          type="button"
                          className="btn btn1 mt-15  btn-outline-secondary mr-2"
                        >
                          UPI Prefixes
                          <i className="fa fa-address-book ml-2"></i>
                        </a>
                        <a
                          type="button"
                          className="btn btn1 mt-15 btn-outline-secondary mr-2"
                        >
                          Create UPI<i className="fa fa-plus ml-2"></i>
                        </a>
                        <a
                          type="button"
                          className="btn btn1 mt-15 btn-outline-secondary mr-2"
                        >
                          Export <i className="fa fa-external-link ml-2"></i>
                        </a>
                        <a
                          type="button"
                          className="btn btn1 mt-15 bg-dark text-white mr-2"
                        >
                          Filter <i className="fa fa-filter ml-2"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body p-3">
                  <div className="table-responsive">
                    {loader ? (
                      <div className="text-center p-5">
                        <div
                          className="spinner-border text-primary"
                          role="status"
                        >
                          <span className="sr-only">Loading...</span>
                        </div>
                      </div>
                    ) : (
                      <>
                         <UpiListTable data={upiList}  toggleStatus={toggleStatus}/>
                          <Pagination
                              currentPage={currentPage}
                              itemsPerPage={itemsPerPage}
                              totalItems={totalItems}
                              onPageChange={handlePageChange}
                            />
                      </>
                    )}
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

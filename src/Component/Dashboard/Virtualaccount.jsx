import React, { useEffect, useState, useCallback } from "react";
import Dheader from '../Dheader';
import Dfooter from '../Dfooter';
import './Virtualaccount.css';
import axios from "axios";
import DashboardTopbar from "./commonComponents/DashboardTopbar";
import VirtualAccountTable from "./commonComponents/VirtualAccountTable"; // Adjust the path as necessary
import { ENDPOINTS } from '../../utils/apiConfig';
import Pagination from "../Pagination";

function VirtualAccount() {
  const [acList, setAcList] = useState([]);
  const sessionid = sessionStorage.getItem("sessionid");
  const [loader, setLoader] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [isFetching, setIsFetching] = useState(false);

  const fetchData = useCallback(async (page = 1, loadMore = false) => {
    setLoader(true);
    try {
      const currentDate = new Date().toISOString();
      const startDate = new Date();
      startDate.setDate(startDate.getDate() - 30); // Adjust range as needed
      const startDateISO = startDate.toISOString();
      const response = await axios.post(ENDPOINTS.GET_VIRTUAL_ACCOUNT_LIST, {
        range: [startDateISO, currentDate],
        pagination: {
          skip: (page - 1) * itemsPerPage,
          limit: itemsPerPage,
        },
        sessionid: sessionid,
      });
      setLoader(false);

      const responseData = await response.data;

      const resDataT = responseData.split('[');
      const resDataPg = responseData.split(',');
      let dataCount = resDataPg[3].replace(/\\/g, '');
      let dataCurentP = resDataPg[4].replace(/\\/g, '').replace('}', '');
      console.log('Count data: ', dataCount.replace('"totalCount":', ""));
      console.log('Pagination data: ', dataCurentP.replace('"currentPage":', ""));
      var dataT = JSON.stringify(resDataT[1].replace(']', ''));
      setTotalItems(dataCount.replace('"totalCount":', ""));
      setItemsPerPage(responseData.itemsPerPage);

      setCurrentPage(dataCurentP.replace('"currentPage":', ""));

      if (!loadMore) {
        setAcList(JSON.parse('[' + JSON.parse(dataT) + ']').slice(0, itemsPerPage));
      } else {
        setAcList((prevList) => [...prevList, ...JSON.parse('[' + JSON.parse(dataT) + ']')]);
      }
    } catch (error) {
      setLoader(false);
      console.error("Error:", error);
    }
  }, [sessionid, itemsPerPage]);

  const toggleStatus = async (account) => {
    try {
      let accountNumber = account.AC_id;
      const response = await fetch(ENDPOINTS.UPDATE_VIRTUAL_ACCOUNT_STATUS, {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          AC_id: accountNumber,
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
    fetchData(1, false);
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
      setCurrentPage((prevPage) => prevPage + 1);
    });
  }, [isFetching, currentPage, fetchData]);

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
                  <div className=" col-xl-4 col-lg-12 col-md-12 col-12">
                    <h4 className="bg-transparent mt-0 p-3">Virtual Accounts</h4>
                  </div>
                  <div className="col-xl-8 col-lg-12 col-md-12 col-12">
                    <div className="mt-0 p-3 d-flex float-right">
                      <div className="wrap wrap1">
                        <div className="search mt-3">
                          <input type="text" className="searchTerm" placeholder="Search ID/Ref Number" />
                          <button type="submit" className="searchButton" aria-label="Search">
                            <i className="fa fa-search"></i>
                          </button>
                        </div>
                      </div>
                      <div className="mx-auto text-center mt--40">
                        <a type="button" className="btn btn1 mr-2 mt-15 btn-outline-secondary">Add Virtual Account<i className="fa fa-plus ml-2"></i></a>
                        <a type="button" className="btn btn1 mt-15 mr-2 btn-outline-secondary">Export <i className="fa fa-external-link ml-2"></i></a>
                        <a type="button" className="btn btn1 bg-dark mt-15 text-white mr-2">Filter <i className="fa fa-filter ml-2"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body p-0">
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
                        <VirtualAccountTable data={acList} toggleStatus={toggleStatus} />
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

export default VirtualAccount;

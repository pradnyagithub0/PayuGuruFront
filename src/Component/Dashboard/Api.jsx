import React, { useContext, useState } from "react";
import Dheader from "../Dheader";
import Dfooter from "../Dfooter";
import "./Api.css";
import ProfileTopbar from "./commonComponents/ProfileTopbar";
import DashboardTopbar from "./commonComponents/DashboardTopbar";
import { Button } from "@mui/material";
import { ENDPOINTS } from "../../utils/apiConfig.js";
import lodingImg from "../../assets/img/loading.gif";
import { ApplicationContext } from "../../context/ApplicationContext";

function Api() {
  const { kycStatus } = useContext(ApplicationContext);
  console.log("kyc Status :", kycStatus);
  const sessionid = sessionStorage.getItem("sessionid");
  const [loader, setLoader] = useState(false);
  const [apiKey, setApiKey] = useState("");
  const [showApiKey, setShowApiKey] = useState(false);

  const copyToClipboard = async () => {
    const tokenInput = document.getElementById("api-token");
    try {
      await navigator.clipboard.writeText(tokenInput.value);
      alert("API Token copied to clipboard");
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  const getApiToken = async () => {
    setLoader(true);

    try {
      const response = await fetch(ENDPOINTS.GET_API_KEY, {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sessionid: sessionid,
        }),
      });

      const resData = await response.json();
      console.log(resData);
      setLoader(false);

      if (resData.mess) {
        if (resData.mess.StatusCodes === "DK00") {
          setApiKey(resData.mess.api_key);
        } else {
          console.log(resData.mess.message);
          alert(resData.mess.message);
        }
      }
    } catch (error) {
      setLoader(false);
      console.error("Error:", error);
    }
  };

  const toggleApiKeyVisibility = () => {
    setShowApiKey(!showApiKey);
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
            <ProfileTopbar />
          </div>

          <div className="row">
            <div className="col-xl-7 col-lg-9 col-md-8 col-12">
              <div className="card pb-0 account-details border-0 shadow-lg">
                <h4 className="bg-transparent mt-0 p-3">API Settings</h4>
                <div className="card-body p-3">
                  <div>
                    <div className="d-flex justify-content-between align-items-center">
                      <label className="form-label">API Token</label>
                      <label
                        className="form-label text-primary"
                        onClick={getApiToken}
                        style={{ cursor: "pointer" }}
                      >
                        Get ap token
                      </label>
                    </div>
                    <div className="input-group mb-3">
                      <input
                        type={showApiKey ? "text" : "password"}
                        className="form-control mt-0"
                        id="api-token"
                        value={
                          apiKey ? apiKey : "qer45rgg-655ffggdd-5567gvxhgav"
                        }
                      />
                      <Button
                        variant="outlined"
                        title={showApiKey ? "Hide" : "Show"}
                        onClick={toggleApiKeyVisibility}
                      >
                        <i
                          className={`fa ${
                            showApiKey ? "fa-eye-slash" : "fa-eye"
                          }`}
                        ></i>
                      </Button>

                      <Button
                        variant="contained"
                        color="success"
                        title="Copy"
                        onClick={copyToClipboard}
                      >
                        <i className="fa fa-copy"></i>
                      </Button>
                    </div>

                    <label className="form-label">Whitelisted IPs</label>
                    <div className="mb-3">
                      <p className="text-secondary">
                        Configure which IP Addresses can access your account.
                      </p>
                    </div>
                    <button
                      type="button"
                      className="btn btn1 float-right virtual-btn bg-red mb-5"
                    >
                      Add IP Address
                    </button>
                  </div>
                </div>
              </div>
              <div className="loaderContainer">
                <div className="inputbox text-center loader-box">
                  {loader && (
                    <img
                      src={lodingImg}
                      alt="loading..."
                      className="loaderImg"
                    />
                  )}
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
export default Api;

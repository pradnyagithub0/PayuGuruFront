import React from "react";
import Dheader from "../Dheader";
import Dfooter from "../Dfooter";
import "./Api.css";
import ProfileTopbar from "./commonComponents/ProfileTopbar";
import DashboardTopbar from "./commonComponents/DashboardTopbar";

function Api() {
  const copyToClipboard = async () => {
    const tokenInput = document.getElementById("api-token");
    try {
      await navigator.clipboard.writeText(tokenInput.value);
      alert("API Token copied to clipboard");
    } catch (err) {
      console.error("Failed to copy: ", err);
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
            <ProfileTopbar />
          </div>

          <div className="row">
            <div className="col-xl-6 col-lg-9 col-md-8 col-12">
              <div className="card pb-0 account-details border-0 shadow-lg">
                <h4 className="bg-transparent mt-0 p-3">API Settings</h4>
                <div className="card-body p-3">
                  <form action="#">
                    <label className="form-label">API Token</label>
                    <div className="input-group mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="api-token"
                        value="5855556a-586b-4048-b8d3-161f6a95d91f"
                        readOnly
                      />
                      <span
                        className="input-group-text border-0"
                        onClick={copyToClipboard}
                        style={{ cursor: "pointer" }}
                      >
                        <i className="fa fa-copy"></i>
                      </span>
                    </div>

                    <label className="form-label">Whitelisted IPs</label>
                    <div className="mb-3">
                      <p className="text-secondary">
                        Configure which IP Addresses can access your account.
                      </p>
                    </div>
                    <a
                      type="button"
                      className="btn btn1 float-right virtual-btn bg-red mb-5"
                    >
                      Add IP Address
                    </a>
                  </form>
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

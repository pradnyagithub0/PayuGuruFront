import "./Resetpassword.css";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ENDPOINTS } from "../../utils/apiConfig.js";
import lodingImg from "../../assets/img/loading.gif";
import { Link, useNavigate } from "react-router-dom";

const Resetpassword = () => {
  const [loader, setLoader] = useState(false);
  const [mobileOtpErr, setResetPassErr] = useState("");

  let navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const token = searchParams.get("token");
  console.log(token);

  const HandleResetPassword = async () => {
    setLoader(true);
    setResetPassErr("");

    try {
      const response = await fetch(ENDPOINTS.OTP_VERIFY, {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          tokan: token,
          newaPass: document.getElementById("newPassword").value,
          RePass: document.getElementById("repeatPassword").value
        }),
      });

      const otpData = await response.json();
      setLoader(false);

      if (otpData.mess) {
        if (otpData.mess.StatusCodes === "M00") {
          console.log(otpData.mess.message);
          navigate(`/success`);
        } else {
          console.log(otpData.mess.message);
          setResetPassErr(otpData.mess.message);
        }
      } else if (otpData.message) {
        // Handle the 'Internal Server Error' case
        console.log(otpData.message);
        setResetPassErr(otpData.message);
      } else {
        // Handle unexpected response structure
        console.error("Unexpected response structure:", otpData);
        setResetPassErr("An unexpected error occurred. Please try again.");
      }
    } catch (error) {
      setLoader(false);
      console.error("Error during OTP verification:", error);
      setResetPassErr("Internal Server Error. Please try again later.");
    }
  };

  return (
    <div>
      <section className="mt-5 py-5 enquiry-section1">
        <div className="container position-relative">
          <div className="row">
            <div className="col-lg-6 col-md-8 col-sm-12 mx-auto">
              <div className="form">
                <h3 className="text-center">Reset Password</h3>
                <p className="text-center">
                  <a href="/" className="text-white">
                    <img
                      src="https://i.ibb.co/vzTTh9B/home.png"
                      alt="home-icon"
                      className="home-icon"
                    />{" "}
                    Home
                  </a>{" "}
                </p>

                <div className="inputbox">
                  <label>Password</label>
                  <input type="text" id="newPassword" placeholder="New Password" />

                  <p className="msg"></p>
                </div>

                <div className="inputbox">
                  <label>Confirm Password</label>
                  <input type="text" id="repeatPassword" placeholder="Repeat Password" />

                  <p className="msg"></p>
                </div>

                <div>
                  <button className="submitButton" onClick={HandleResetPassword}>
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="loaderContainer">
            <div className="inputbox text-center loader-box">
              {loader && (
                <img src={lodingImg} alt="loading..." className="loaderImg" />
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Resetpassword;

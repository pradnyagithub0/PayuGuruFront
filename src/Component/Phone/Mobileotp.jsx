import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./Mobileotp.css";
import lodingImg from '../../assets/img/loading.gif';
import { ApplicationContext } from '../../context/ApplicationContext'; 
import { otp_verify } from "../../utils/api_endpoints.js";


const MobileVerifyPage = () => {
  const { clientId } = useContext(ApplicationContext); //value coming from context
  const clientId2 = localStorage.getItem('clientId');
  console.log('MobileVerifyPage clientId:', clientId);

  const [mobileOtpErr, setMobileOtpErr] = useState("");
  const [loader, setLoader] = useState(false);

  let navigate = useNavigate();
  
  const mobileOtpVerify = async () => {
    setLoader(true);
    setMobileOtpErr("");
  
    try {
      const response = await fetch(otp_verify, {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          clientId: "ccdfb0b42c9f7af7b5",
          otp: document.getElementById("mobileOtp").value,
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
          setMobileOtpErr(otpData.mess.message);
        }
      } else if (otpData.message) {
        // Handle the 'Internal Server Error' case
        console.log(otpData.message);
        setMobileOtpErr(otpData.message);
      } else {
        // Handle unexpected response structure
        console.error("Unexpected response structure:", otpData);
        setMobileOtpErr("An unexpected error occurred. Please try again.");
      }
    } catch (error) {
      setLoader(false);
      console.error("Error during OTP verification:", error);
      setMobileOtpErr("Internal Server Error. Please try again later.");
    }
  };
  

  return (
    <div>
      <section className="mt-5 py-5 enquiry-section1">
        <div className="container ">
          <div className="row">
            <div className="col-lg-6 col-md-8 col-sm-12 mx-auto">
              <div className="form">
                <h3 className="text-center">Mobile Verification {clientId }</h3>
                <p className="text-center">
                  <a href="/" className="text-white">
                    <img
                      src="https://i.ibb.co/vzTTh9B/home.png"
                      alt="home-icon"
                      className="home-icon"
                    />
                    Home
                  </a>
                </p>

                <div className="inputbox">
                  <label>Enter Your Mobile OTP</label>
                  <input
                    type="text"
                    id="mobileOtp"
                    name="mobileOtp"
                    maxLength="6"
                  />
                  <span id="mobileOtpError" className="text-danger">{ mobileOtpErr }</span>
                </div>
                <input type="submit" value="Resend Otp" className="submit" />
                <div className="inputbox text-center"></div>
                <div>
                  <button className="submitButton" onClick={mobileOtpVerify}>
                    Submit
                  </button>
                </div>
                <div className="inputbox text-center"></div>
              </div>
            </div>
          </div>
          <div className="loaderContainer">
            <div className="inputbox text-center loader-box">
            {loader && <img src={lodingImg} alt='loading...' className="loaderImg"/>}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MobileVerifyPage;

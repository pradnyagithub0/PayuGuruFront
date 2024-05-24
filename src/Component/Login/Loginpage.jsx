import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import lodingImg from "../../assets/img/loading.gif";
import "./Loginpage.css";

import { ENDPOINTS } from "../../utils/apiConfig";
import { Button } from "@mui/material";

const Login = () => {
  const [loader, setLoader] = useState(false);
  const [loginErr, setLoginErr] = useState("");
  const [mobileNotVerified, setMobileNotVerified] = useState(false);
  const [emailNotVerified, setEmailNotVerified] = useState(false);
  const Login_API = ENDPOINTS.LOGIN_USER;
  const resend_email_API = ENDPOINTS.RE_SEND_E_VERIFY;
  const clientId = localStorage.getItem("clientId");
  let navigate = useNavigate();

  const loginUser = async () => {
    setLoader(true);
    setLoginErr("");
    setMobileNotVerified(false);
    try {
      const response = await fetch(Login_API, {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          mobile: document.getElementById("mobile").value,
          password: document.getElementById("password").value,
        }),
      });

      const resData = await response.json();
      setLoader(false);

      if (resData.responsed) {
        if (
          resData.responsed.user_status === "Y" &&
          resData.responsed.mobile_verify === "Y" &&
          resData.responsed.email_verify === "Y"
        ) {
          console.log(resData.responsed.sessionid);
          sessionStorage.setItem("sessionid", resData.responsed.sessionid);
          navigate(`/dashboard`);
        } else if (resData.responsed.mobile_verify !== "Y") {
          setMobileNotVerified(true);
        } else if (resData.responsed.email_verify !== "Y") {
          setMobileNotVerified(true);
        }
      } else if (resData.mess.message) {
        // Handle the 'Internal Server Error' case
        console.log(resData.mess.message);
        setLoginErr(resData.mess.message);
      } else {
        // Handle unexpected response structure
        console.error("Unexpected response structure:", resData);
        setLoginErr("An unexpected error occurred. Please try again.");
      }
    } catch (error) {
      setLoader(false);
      console.error("Error during OTP verification:", error);
      setLoginErr("Internal Server Error. Please try again later.");
    }
  };

  const resendEmail = async () => {
    setLoader(true);
    setLoginErr("");
    setEmailNotVerified(false);
    try {
      const response = await fetch(resend_email_API, {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          clientId: clientId,
        }),
      });

      const resData = await response.json();
      setLoader(false);

      if (resData.mess) {
        if (resData.mess.StatusCodes === "E302") {
          alert(resData.mess.message);
        } else {
          alert(resData.mess.message);
        }
      } else {
        // Handle unexpected response structure
        console.error("Unexpected response structure:", resData);
        setLoginErr("An unexpected error occurred. Please try again.");
      }
    } catch (error) {
      setLoader(false);
      console.error("Error during OTP verification:", error);
      setLoginErr("Internal Server Error. Please try again later.");
    }
  };

  return (
    <div className="stack">
      <section className="mt-5 py-5 enquiry-section1">
        <div className="container position-relative">
          <div className="row">
            <div className="col-lg-6 col-md-8 col-sm-12 mx-auto">
              <div className="form">
                <h3 className="text-center">LOGIN FORM</h3>
                <p className="text-center">
                  <Link to="/" className="text-white">
                    <img
                      src="https://i.ibb.co/vzTTh9B/home.png"
                      alt="home-icon"
                      className="home-icon"
                    />
                    Home
                  </Link>
                </p>
                <div className="inputbox">
                  <label>Mobile</label>
                  <input type="Mobile" name="mobile" id="mobile" />
                  <p className="msg text-warning"></p>
                </div>
                <div className="inputbox">
                  <label>Password</label>
                  <input type="Password" name="password" id="password" />
                  <p className="msg text-warning"></p>
                </div>
                <span className="text-warning">{loginErr}</span>
                <div
                  className={`text-warning ${
                    mobileNotVerified ? "d-block" : "d-none"
                  }`}
                  id="mobile-not-verify-err"
                >
                  Your mobile is not verify , please{" "}
                  <Link to="mobileotp">Click Here</Link> to verify.
                </div>
                <div
                  className={`text-warning ${
                    emailNotVerified ? "d-block" : "d-none"
                  }`}
                  id="mobile-not-verify-err"
                >
                  Your email is not verify , please{" "}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={resendEmail}
                  >
                    click here
                  </Button>{" "}
                  to verify.
                </div>
                <div className="inputbox text-right">
                  <a href="/Forgotun">Forgot Password?</a>
                </div>
                <div>
                  <button className="submitButton" onClick={loginUser}>
                    Submit
                  </button>
                </div>

                <div className="inputbox text-center">
                  <p>
                    You Don't have An Account ? <a href="/Register">Register</a>
                  </p>
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

export default Login;

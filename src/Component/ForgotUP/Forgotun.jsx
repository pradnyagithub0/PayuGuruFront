import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Forgotun.css";
import lodingImg from "../../assets/img/loading.gif";
import { ENDPOINTS } from "../../utils/apiConfig";

const ForgotPasswordPage = () => {
  const [loader, setLoader] = useState(false);
  const [mobileOtpErr, setMobileOtpErr] = useState("");

  const forgetPass = async () => {
    setLoader(true);
    setMobileOtpErr("");

    try {
      const response = await fetch(ENDPOINTS.FORGET_PASSWORD, {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          mobile: document.getElementById("mobile").value,
        }),
      });

      const resData = await response.json();
      setLoader(false);

      if (resData.mess) {
        if (resData.mess.StatusCodes === "E201") {
          console.log(resData.mess.message);
          setMobileOtpErr("Reset Password link send, please check your inbox.");
        } else {
          console.log(resData.mess.message);
          setMobileOtpErr(resData.mess.message);
        }
      } else if (resData.message) {
        // Handle the 'Internal Server Error' case
        console.log(resData.message);
        setMobileOtpErr(resData.message);
      } else {
        // Handle unexpected response structure
        console.error("Unexpected response structure:", resData);
        setMobileOtpErr("An unexpected error occurred. Please try again.");
      }
    } catch (error) {
      setLoader(false);
      console.error("Error :", error);
      setMobileOtpErr("Internal Server Error. Please try again later.");
    }
  };

  return (
    <div>
      <section className="mt-5 py-5 enquiry-section1">
        <div className="container position-relative">
          <div className="row">
            <div className="col-lg-6 col-md-8 col-sm-12 mx-auto">
              <div className="form">
                <h3 className="text-center">Forgot Password</h3>
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
                  <label>Email/Mobile</label>
                  <input type="email" name="email" id="mobile" />
                </div>
                <span id="mobileOtpError" className="text-warning py-4">
                  {mobileOtpErr}
                </span>
                <div>
                  <button className="submitButton mt-2" onClick={forgetPass}>
                    Submit
                  </button>
                </div>

                <div className="inputbox text-center">
                  <p>
                    You Don't have An Account ?{" "}
                    <a href="/Register"> Register</a>
                  </p>
                </div>
                <div className="inputbox text-center">
                  <p>
                    Already Have An Account ? <a href="/Login"> Login</a>
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

export default ForgotPasswordPage;

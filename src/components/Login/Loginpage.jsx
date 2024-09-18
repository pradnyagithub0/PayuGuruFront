import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { notifications } from '@mantine/notifications';
import { IconCheck, IconAlertTriangle } from '@tabler/icons-react';
import loadingImg from "../../assets/img/loading.gif";
import "./Loginpage.css";
import { ENDPOINTS } from "../../utils/apiConfig";

const getAPI = async () => {
  return {
    Login_API: await ENDPOINTS.LOGIN_USER,
    resend_email_API: await ENDPOINTS.RE_SEND_E_VERIFY,
  };
};

const Login = () => {
  const [loader, setLoader] = useState(false);
  const [loginErr, setLoginErr] = useState("");
  const [mobileNotVerified, setMobileNotVerified] = useState(false);
  const [emailNotVerified, setEmailNotVerified] = useState(false);
  const clientId = localStorage.getItem("clientId");
  let navigate = useNavigate();
  const [fieldErrors, setFieldErrors] = useState({
    userMobile: "",
    password: "",
  });

  // Function to show notifications
  const showNotification = (title, message, color, icon, autoClose = 2000) => {
    notifications.show({
      title,
      message,
      color,
      icon,
      autoClose,
    });
  };

  // Function to handle login
  const loginUser = async () => {
    setLoader(true); // Start loader and show notification
    setLoginErr("");
    setMobileNotVerified(false);
    setEmailNotVerified(false);
    setFieldErrors({});

    // Show loading notification
    const id = notifications.show({
      loading: true,
      title: 'Logging in...',
      message: 'Please wait while we verify your credentials.',
      autoClose: false, // Keep it active while loading
      withCloseButton: false,
    });

    try {
      const login_api = (await getAPI()).Login_API;
      const response = await fetch(login_api, {
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
      setLoader(false); // Stop loader

      // Handle the response
      if (resData.responsed) {
        if (
          resData.responsed.user_status === "Y" &&
          resData.responsed.mobile_verify === "Y" &&
          resData.responsed.email_verify === "Y"
        ) {
          sessionStorage.setItem("sessionid", resData.responsed.sessionid);
          sessionStorage.setItem("kyc_status", resData.responsed.kyc_status);

          notifications.update({
            id,
            color: 'teal',
            title: 'Login Successful',
            message: 'Redirecting to your dashboard...',
            icon: <IconCheck />,
            loading: false,
            autoClose: 5000,
          });

          navigate(`/dashboard`);
        } else if (resData.responsed.mobile_verify !== "Y") {
          setMobileNotVerified(true);
          showNotification('Mobile Not Verified', 'Please verify your mobile number.', 'yellow', <IconAlertTriangle />);
        } else if (resData.responsed.email_verify !== "Y") {
          setEmailNotVerified(true);
          showNotification('Email Not Verified', 'Please verify your email address.', 'yellow', <IconAlertTriangle />);
        }
      } else if (resData.success === false) {
        parseFieldErrors(resData.message);
        notifications.update({
          id,
          color: 'red',
          title: 'Login Failed',
          message: 'Invalid credentials or missing information.',
          icon: <IconAlertTriangle />,
          loading: false,
          autoClose: 2000,
        });
      } else {
        setLoginErr("An unexpected error occurred. Please try again.");
        notifications.update({
          id,
          color: 'red',
          title: 'Error',
          message: 'An unexpected error occurred. Please try again.',
          icon: <IconAlertTriangle />,
          loading: false,
          autoClose: 2000,
        });
      }
    } catch (error) {
      setLoader(false);
      setLoginErr("Internal Server Error. Please try again later.");
      notifications.update({
        id,
        color: 'red',
        title: 'Server Error',
        message: 'Internal Server Error. Please try again later.',
        icon: <IconAlertTriangle />,
        loading: false,
        autoClose: 2000,
      });
    }
  };

  // Function to parse field errors
  const parseFieldErrors = (errorMessage) => {
    const fieldErrors = {
      userMobile: "",
      password: "",
    };

    if (errorMessage.includes('"mobile"'))
      fieldErrors.userMobile = "Mobile is not allowed to be empty.";
    if (errorMessage.includes('"password"'))
      fieldErrors.password = "Password is not allowed to be empty";
    setFieldErrors(fieldErrors);
  };

  // Function to resend email
  const resendEmail = async () => {
    setLoader(true); // Show loader and notification
    setLoginErr("");
    setEmailNotVerified(false);

    const id = notifications.show({
      loading: true,
      title: 'Resending email...',
      message: 'Please wait while we resend the verification email.',
      autoClose: false,
      withCloseButton: false,
    });

    try {
      const resend_email_api = (await getAPI()).resend_email_API;
      const response = await fetch(resend_email_api, {
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
      setLoader(false); // Stop loader

      if (resData.mess) {
        notifications.update({
          id,
          color: 'teal',
          title: 'Email Sent',
          message: 'A verification email has been sent.',
          icon: <IconCheck />,
          loading: false,
          autoClose: 2000,
        });
      } else {
        setLoginErr("An unexpected error occurred. Please try again.");
        notifications.update({
          id,
          color: 'red',
          title: 'Error',
          message: 'An unexpected error occurred. Please try again.',
          icon: <IconAlertTriangle />,
          loading: false,
          autoClose: 2000,
        });
      }
    } catch (error) {
      setLoader(false);
      notifications.update({
        id,
        color: 'red',
        title: 'Server Error',
        message: 'Internal Server Error. Please try again later.',
        icon: <IconAlertTriangle />,
        loading: false,
        autoClose: 2000,
      });
    }
  };

  // Allow enter key to trigger login
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Enter") {
        loginUser();
      }
    };

    window.addEventListener("keypress", handleKeyPress);

    return () => {
      window.removeEventListener("keypress", handleKeyPress);
    };
  }, []);
  return (
    <div>
      <section className="mt-5 py-5 enquiry-section1" id="stack">
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
                  <input type="mobile" name="mobile" id="mobile"/>
                  <p className="msg text-warning">{fieldErrors.userMobile}</p>
                </div>
                <div className="inputbox">
                  <label>Password</label>
                  <input type="Password" name="password" id="password"/>
                  <p className="msg text-warning">{fieldErrors.password}</p>
                </div>
                <span className="text-warning">{loginErr}</span>
                <div
                  className={`text-warning ${
                    mobileNotVerified ? "d-block" : "d-none"
                  }`}
                  id="mobile-not-verify-err"
                >
                  Your mobile is not verified, please{" "}
                  <Link to="mobileotp">Click Here</Link> to verify.
                </div>
                <div
                  className={`text-warning ${
                    emailNotVerified ? "d-block" : "d-none"
                  }`}
                  id="email-not-verify-err"
                >
                  Your email is not verified, please{" "}
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
                  <a href="/forget">Forgot Password?</a>
                </div>
                <div>
                  <button type="submit" className="submitButton" onClick={loginUser}>
                    Submit
                  </button>
                </div>
                <div className="inputbox text-center">
                  <p>
                    You Don't have An Account ? <a href="/register">Register</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="loaderContainer">
            <div className="inputbox text-center loader-box">
              {loader && (
                <img src={loadingImg} alt="loading..." className="loaderImg" />
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
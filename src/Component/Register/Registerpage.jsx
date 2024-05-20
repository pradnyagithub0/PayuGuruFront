import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Registerpage.css";
import lodingImg from "../../assets/img/loading.gif";

const url = "https://apiv1.bapaupipaymentgatewayapi.com/api/user/registation";

const Register = () => {
  const [loader, setLoader] = useState(false);
  const [registerErr, setregisterErr] = useState("");
  let navigate = useNavigate();

  const registerUser = async () => {
    setLoader(true);
    const respone = await fetch(url, {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: document.getElementById("userName").value,
        mobile: document.getElementById("userPhone").value,
        email: document.getElementById("userEmail").value,
        password: document.getElementById("password").value,
        confirmedpassword: document.getElementById("confirmPass").value,
        com_name: document.getElementById("companyName").value,
      }),
    });
    const responseData = await respone.json();
    setLoader(false);
    if (
      responseData.StatusCodes &&
      responseData.StatusCodes === "00"
    ) {
      console.log(responseData.responsed.clientId);
      navigate(`/success`);
    } else {
      console.log("some err");
    }
  };

  return (
    <div>
      <section className="mt-5 py-5 enquiry-section1">
        <div className="container position-relative">
          <div className="row">
            <div className="col-lg-3 col-md-2 col-12 "></div>
            <div className="col-lg-6 col-md-8 col-12">
              <div className="form">
                <h3 className="text-center">REGISTRATION FORM</h3>
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
                  <label>Name</label>
                  <input type="text" name="userName" id="userName" />
                  <p className="msg"></p>
                </div>
                <div className="inputbox">
                  <label>Company Name</label>
                  <input type="text" name="companyName" id="companyName" />
                  <p className="msg"></p>
                </div>
                <div className="inputbox">
                  <label for="email">Email</label>
                  <input type="email" name="userEmail" id="userEmail" />
                  <p className="msg"></p>
                </div>
                <div className="inputbox">
                  <label>Mobile</label>
                  <input type="phone" name="userPhone" id="userPhone" />
                  <p className="msg"></p>
                </div>
                <div className="inputbox">
                  <label>password</label>
                  <input type="password" name="password" id="password" />
                  <p className="msg"></p>
                </div>
                <div className="inputbox">
                  <label>confirm password</label>
                  <input type="password" name="confirmPass" id="confirmPass" />
                  <p className="msg"></p>
                </div>
                <div class="tacbox">
                  <input id="checkbox" type="checkbox" className="checkbox" />
                  <label for="checkbox">
                    {" "}
                    I agree to these <a href="#">Terms and Conditions</a>.
                  </label>
                </div>
                <div>
                  <button className="submitButton" onClick={registerUser}>
                    Submit
                  </button>
                </div>
                <div className="inputbox text-center">
                  <p>
                    Already Have An Account ? <a href="/Login"> Login</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-2 col-12 "></div>
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

export default Register;

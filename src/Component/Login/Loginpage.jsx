import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './Loginpage.css';

import { ENDPOINTS } from '../../utils/apiConfig';



const url = ENDPOINTS.LOGIN_USER;

const Login = () => {
<<<<<<< HEAD

    let navigate = useNavigate();
    const initialValues = {
        mobile: "",
        password:'',
    };
=======
  const [loader, setLoader] = useState(false);
  const [loginErr, setLoginErr] = useState("");
  const [mobileNotVerified, setMobileNotVerified] = useState(false);
  const [emailNotVerified, setEmailNotVerified] = useState(false);
  const Login_API = ENDPOINTS.LOGIN_USER;
  const resend_email_API = ENDPOINTS.RE_SEND_E_VERIFY;
  const clientId = localStorage.getItem("clientId");
  let navigate = useNavigate();
  const [fieldErrors, setFieldErrors] = useState({
    userMobile: "",
    password: "",
  });


  const loginUser = async () => {
    setLoader(true);
    setLoginErr("");
    setMobileNotVerified(false);
    setFieldErrors({});
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
>>>>>>> 2592c66d708b42a43fcf608c93a382057a1e79b9

    const [values, setValues] = useState(initialValues);
    const [message,setMessage] = useState()

<<<<<<< HEAD
    

    const loginChange = () => {
        console.log(values)
        fetch(url,{
            method: 'POST',
            headers:{
                'accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(values)
        })
        .then((res) => res.json())
        .then((data) => {
            if(data.auth === false){
                setMessage(data.token)
            }else{
                sessionStorage.setItem('ltk',data.token)
                navigate(`/`)
            }
        })
=======
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
      } else if (resData.success  === false) {
        // Handle the 'Internal Server Error' case
        console.log(resData.message);
        parseFieldErrors(resData.message);
      } else {
        // Handle unexpected response structure
        console.error("Unexpected response structure:", resData);
        setLoginErr("An unexpected error occurred. Please try again.");
      }
    } catch (error) {
      setLoader(false);
      console.error("Error during OTP verification:", error);
      setLoginErr("Internal Server Error. Please try again later.");
>>>>>>> 2592c66d708b42a43fcf608c93a382057a1e79b9
    }
    
          

<<<<<<< HEAD
    
   
=======
  const parseFieldErrors = (errorMessage) => {
    const fieldErrors = {
      userMobile: "",
      password: "",
    };
    
    if (errorMessage.includes('"mobile"'))
      fieldErrors.userMobile = "Mobile is not allowed to be empty.";
    if (errorMessage.includes('"password"'))
      fieldErrors.password =
        "Password is not allowed to be empty";
    setFieldErrors(fieldErrors);
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
>>>>>>> 2592c66d708b42a43fcf608c93a382057a1e79b9

    

    return(
        <div className='stack'>
             
             <section className="mt-5 py-5 enquiry-section1">
             <div className="container">
                 <div className="row" >
                 
                      
                    <div className="col-lg-3 col-md-2 col-12 "></div>
                     <div className="col-lg-6 col-md-8 col-12">

<<<<<<< HEAD
                     <form className="form">
                     <h3 className="text-center">LOGIN FORM</h3>
                     <p className="text-center"><a href="/" className="text-white"><img src="https://i.ibb.co/vzTTh9B/home.png" alt="home-icon"/> Home</a> </p>
                     <div className="inputbox">
                         <label>Mobile</label>
                         <input type="Mobile" name="mobile" id="mobile"/>
                         <p className="msg text-warning"></p>
                     </div>
                     <div className="inputbox">
                         <label>Password</label>
                         <input type="Password" name="password" id="password"/>
                         <p className="msg text-warning"></p>
                     </div>
                     <div className="inputbox text-right forgot">
                         <a href="/Forgotun">Forgot Password?</a>
                     </div>
                     <button className="submitButton" onClick={loginChange}>
                     Submit
                   </button>
                   
                     <div className="inputbox text-center">
                     <p>You Don't have An Account ? <a href='/Register'>Register</a></p> 
                     </div>
                 </form>
=======
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
                  <p className="msg text-warning">{fieldErrors.userMobile}</p>
                </div>
                <div className="inputbox">
                  <label>Password</label>
                  <input type="Password" name="password" id="password" />
                  <p className="msg text-warning">{fieldErrors.password}</p>
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
>>>>>>> 2592c66d708b42a43fcf608c93a382057a1e79b9

                     </div>
                    
                 </div>
             </div>
         </section>
         
         
        </div>
    )
}

export default Login;
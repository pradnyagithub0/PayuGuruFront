import './Resetpassword.css';


const Resetpassword = () => {
    
   

<<<<<<< HEAD

=======
  let navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const token = searchParams.get("token");
  const [fieldErrors, setFieldErrors] = useState({
    password: "",
    confirmPass: "",
    token: "",
  });
  
  const HandleResetPassword = async () => {
    setLoader(true);
    setResetPassErr("");
>>>>>>> 2592c66d708b42a43fcf608c93a382057a1e79b9

    return (
        <div>
        
        <section className="mt-5 py-5 enquiry-section1">
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-2 col-12 "></div>
                <div className="col-lg-6 col-md-8 col-12">
                    <form className="form">
                        <h3 className="text-center">Reset Password</h3>
                        <p className="text-center"><a href="/" className="text-white"><img src="https://i.ibb.co/vzTTh9B/home.png" 
                        alt="home-icon"/> Home</a> </p>

                        

<<<<<<< HEAD
                        <div className="inputbox">
                                 <label>Password</label>
                                 <input   type="text" placeholder='New Password' />
                                 
                                 <p className="msg"></p>
                        </div>

                        <div className="inputbox">
                             <label>Confirm Password</label>
                             <input  type="text" placeholder='Repeat Password' />
                            
                        <p className="msg"></p>
                        </div>
                        
                        
                        <button className="submitButton">
                        Reset
                      </button>
                        

                        
                    </form>
                        
               </div>
=======
      if (resData.mess) {
        if (resData.mess.StatusCodes === "U00") {
          setResetPassErr("Password has been successFully Changed.");
          setLoginBtn(true);
          // navigate(`/login`);
        } else {
          console.log(resData.mess.message);
          setResetPassErr(resData.mess.message);
        }
      } else if (resData.success === false) {
        parseFieldErrors(resData.message);
      }
    } catch (error) {
      setLoader(false);
      console.error("Error:", error);
      setResetPassErr("Internal Server Error. Please try again later.");
    }
  };

  const parseFieldErrors = (errorMessage) => {
    const fieldErrors = {
      password: "",
      confirmPass: "",
      token: "",
    };
    
    if (errorMessage.includes('"password"'))
      fieldErrors.password = "*password length must be at least 8 characters long, must contain one uppercase letter, one lowercase letter, and one digit";
    if (errorMessage.includes('"confirmedpassword"'))
      fieldErrors.confirmPass =
        "Password do not match";
    if (errorMessage.includes('"token"'))
      fieldErrors.token =
        "Token must be string";
    setFieldErrors(fieldErrors);
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
                  <p className="msg text-warning">{fieldErrors.password}</p>
                </div>

                <div className="inputbox">
                  <label>Confirm Password</label>
                  <input type="text" id="repeatPassword" placeholder="Repeat Password" />
                  <p className="msg text-warning">{fieldErrors.confirmPass}</p>
                </div>
                <p className="msg text-warning">{fieldErrors.token}</p>
                <span id="resetaPassError" className="text-warning">{resetPassErr}</span>
                {loginBtn && <div>
                  <Link to="/login">
                    click here to login
                  </Link>
                </div>}
>>>>>>> 2592c66d708b42a43fcf608c93a382057a1e79b9
                
            </div>
        </div>
    </section>
    
    </div>
    
            
      )
};
export default Resetpassword;
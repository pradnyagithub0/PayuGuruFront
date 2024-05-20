import React,{ useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Emailotp.css'; 



const url = "";

const EmailVerifyPage = () => {

  
  let navigate = useNavigate();
  const initialValues = {
    
      
      
      
  };

  const [values, setValues] = useState(initialValues);
    const [message,setMessage] = useState()

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({
          values,
          [name]: value,
        });
    };

    const checkout = () => {
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
              navigate(`/Mobileotp`)
          }
      })
      .then(navigate(`/Mobileotp`))
  }
  

  


  
  return (
    <div>
    
    <section className="mt-5 py-5 enquiry-section1">
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-2 col-12 "></div>
                <div className="col-lg-6 col-md-8 col-12">
                    <form className="form">
                        <h3 className="text-center">Email Verification</h3>
                        <p className="text-center"><a href="/" className="text-white"><img src="https://i.ibb.co/vzTTh9B/home.png" alt="home-icon"/> Home</a> </p>

                        <div className="inputbox">
                        <label>Enter Your Email OTP</label>
                        <input type="" id="" name="" maxLength="6" />
                         </div>

                         <input type="Submit" value="Resend Otp" className="submit" onClick={handleInputChange}/>
                         <div className="inputbox text-center">
                        
                        </div>
                         <input type="submit" value="Verify Email" onClick={checkout} className="submit" />
                         <div className="inputbox text-center">
                        
                        </div>

                         
                    </form>
                </div>
                <div className="col-lg-3 col-md-2 col-12 "></div>
            </div>
        </div>
    </section>
    


    </div>
  )
}

export default EmailVerifyPage;

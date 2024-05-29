import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './Loginpage.css';

import { ENDPOINTS } from '../../utils/apiConfig';



const url = ENDPOINTS.LOGIN_USER;

const Login = () => {

    let navigate = useNavigate();
    const initialValues = {
        mobile: "",
        password:'',
    };

    const [values, setValues] = useState(initialValues);
    const [message,setMessage] = useState()

    

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
    }
    
          

    
   

    

    return(
        <div className='stack'>
             
             <section className="mt-5 py-5 enquiry-section1">
             <div className="container">
                 <div className="row" >
                 
                      
                    <div className="col-lg-3 col-md-2 col-12 "></div>
                     <div className="col-lg-6 col-md-8 col-12">

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

                     </div>
                    
                 </div>
             </div>
         </section>
         
         
        </div>
    )
}

export default Login;
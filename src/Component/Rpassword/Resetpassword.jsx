import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Resetpassword.css';


const url = '';

const Resetpassword = () => {
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
                navigate(`/success`)
            }
        })
        .then(navigate(`/success`))
    }


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

                        

                        <div className="inputbox">
                                 <label>New Password</label>
                                 <input type="text" placeholder='New Password' />
                                 
                                 <p className="msg"></p>
                        </div>

                        <div className="inputbox">
                             <label>Repeat Password</label>
                             <input className="" type="text" placeholder='Repeat Password' />
                            
                        <p className="msg"></p>
                        </div>
                        
                        
                        <input type="submit" value="RESET" className="submit" onClick={checkout}/>
                        

                        
                    </form>
                        
               </div>
                
            </div>
        </div>
    </section>
    
    </div>
    
            
      )
}
export default Resetpassword;
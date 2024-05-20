import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './Loginpage.css';



const url = "http://3.17.216.66:5000/api/auth/login";

const Login = () => {

    let navigate = useNavigate();
    const initialValues = {
        
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        
      }

    const [values, setValues] = useState(initialValues);
    

    const handleInputChange = (e) => {
        const { email, value } = e.target;
        setValues({
          ...values,
          [email]: value,
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
                
            }else{
                sessionStorage.setItem('ltk',data.token)
                navigate(`/`)
            }
        })
        .then(navigate(`/dashboard`))
    }
    

    return(
        <div className='stack'>
             
             <section className="mt-5 py-5 enquiry-section1">
             <div className="container">
                 <div className="row">
                      
                    <div className="col-lg-3 col-md-2 col-12 "></div>
                     <div className="col-lg-6 col-md-8 col-12">

                     <form className="form" onSubmit={handleSubmit}>
                     <h3 className="text-center">LOGIN FORM</h3>
                     <p className="text-center"><a href="/" className="text-white"><img src="https://i.ibb.co/vzTTh9B/home.png" alt="home-icon"/> Home</a> </p>
                     <div className="inputbox">
                         <label>Email or Mobile Number</label>
                         <input type="email" name="email" id="email" value={values.email} onChange={handleInputChange}/>
                         <p className="msg"></p>
                     </div>
                     <div className="inputbox">
                         <label>Password</label>
                         <input type="password" name="Password" id="Password" value={values.password} onChange={handleInputChange}/>
                         <p className="msg"></p>
                     </div>
                     <div className="inputbox text-right forgot">
                         <a href="/Forgotun">Forgot Password?</a>
                     </div>
                     <input type="submit" value="LOGIN" className="submit" onClick={checkout}/>
                     <div className="inputbox text-center">
                     <p>You Don't have An Account ? <a href='/Register'>  Register</a></p> 
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
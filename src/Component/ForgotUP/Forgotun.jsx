import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Forgotun.css';
import { ENDPOINTS } from "../../utils/apiConfig";
import lodingImg from "../../assets/img/loading.gif";

const ForgotPasswordPage = () => {
  const [loader, setLoader] = useState(false);
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const validateEmail = (email) => {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(String(email).toLowerCase());
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoader(true);
        if (!email) {
            setError('Email is required');
            return;
        }
        if (!validateEmail(email)) {
            setError('Invalid email address');
            return;
        }

        // Clear any previous errors
        setError('');
        setMessage('');

        try {
            const response = await fetch(ENDPOINTS.CHANGE_PASSWORD, {
                method: 'POST',
                headers: {
                    accept: "application/json",
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ 
                    email: email
                })
            });

            if (!response.ok) {
                throw new Error('Failed to send password reset email');
            }

            const data = await response.json();

            if (data.success) {
                setMessage('Password reset email sent successfully');
            } else {
                setError('Failed to send password reset email');
            }
        } catch (error) {
            setError('Something went wrong. Please try again later.');
        }
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Enter') {
                document.getElementById('forgot-button').click();
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <div>
            <section className="mt-5 py-5 enquiry-section1" id='stack2'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-2 col-12 "></div>
                        <div className="col-lg-6 col-md-8 col-12">
                            <form className="form" >
                                <h3 className="text-center">Forgot Password</h3>
                                <p className="text-center">
                                    <a href="/" className="text-white">
                                        <img src="https://i.ibb.co/vzTTh9B/home.png" alt="home-icon" /> Home
                                    </a>
                                </p>
                                <div className="inputbox">
                                    <label>Email</label>
                                    <input 
                                        type="email" 
                                        name='userEmail' 
                                        id="userEmail" 
                                        value={email}  
                                        onChange={handleEmailChange}
                                    />
                                    <p className="msg"></p>
                                </div>
                                
                                {error && <p style={{ color: 'red' }}>{error}</p>}
                                {message && <p style={{ color: 'green' }}>{message}</p>}
                                <button type="submit" id="forgot-button" className="submitButton" onSubmit={handleSubmit}>
                                    Submit
                                </button>
                                <div className="inputbox text-center">
                                    <p>You Don't have An Account? <a href='/Register'>Register</a></p>
                                </div>
                                <div className="inputbox text-center">
                                    <p>Already Have An Account? <a href='/Login'>Login</a></p>
                                </div>
                            </form>
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

export default ForgotPasswordPage;

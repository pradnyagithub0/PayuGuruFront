import React from 'react';
import './Mwelcomeverify.css';
import Header from "../../Header";
import Footer from "../../Footer";

const Mwelcomeverify = () => {
  return (
    <div>
      <Header />
      <div className="register-success-container">
        <h2>Welcome To PayuGuru!</h2>
        <p>Your mobile number has been successfully verified and registered!</p>
        <span>Verify your email</span>
        <p>Please check your email inbox/spam folder to verify your email address.</p>
      </div>
      <Footer />
    </div>
  );
};

export default Mwelcomeverify;
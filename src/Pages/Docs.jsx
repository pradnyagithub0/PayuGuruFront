import React from 'react';
import { Link } from 'react-router-dom';
import './Docs.css';


 const Docs = () => {

  
  
  



  return (
    <div>
    <div className="row">
      <div className="left">
        <img src="https://i.ibb.co/GTr3w2M/logo.webp" alt="logo" width="160" height="25"/>
    <input type="text" id="mySearch" onkeyup="myFunction()" placeholder="Search.." title="Type in a category"></input>
    <hr/>
        <ul id="myMenu">
          <li><a href="#">API URL</a></li>
          <li><a href="#">Payments</a></li>
          <li><a href="#">Banking</a></li>
          <li><a href="#">Virtual Upi</a></li>
          <li><a href="#">Virtual Upi Collect</a></li>
          <li><a href="#">Status</a></li>
          <li><a href="#">Webhook</a></li>
        </ul>
  </div>
      <div className="right">
          <h2>Payuguru (1.0.0)</h2>
        <p>Payuguru Partner APIs are completely RESTful and all our responses are returned in JSON.</p>
          <h2>API URL</h2>
        <p>The payuguru Partner API URL is https://partners.payuguru.in. You need to include this before each API endpoint to make API calls.</p>
          <h2>Payments</h2>
        <p>This section explains how to initiate a fund transfer to any bank account and check the status of the transaction.</p>
        <h2>Initiate Fund Transfers</h2>
        <p>Transfer amount to any bank account</p>
      </div>
  </div>

</div>

  )
}
export default Docs;
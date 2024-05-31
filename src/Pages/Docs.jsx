import React from 'react';
import './Docs.css';


 const Docs = () => {

  
  
  



  return (
    <div>
    <div className="container-fluid">
    <div className="row">
        <div className="col-2 collapse show d-md-flex bg-light pt-2 pl-0 min-vh-100" id="sidebar">
            <ul className="nav flex-column flex-nowrap overflow-hidden">
                <li className="nav-item">
                    <a className="nav-link text-truncate" href="#"> 
                    <span className="d-none d-sm-inline">Api Url</span>
                    
                    </a>
                </li>

                <li className="nav-item">
                    <a className="nav-link collapsed text-truncate" href="#submenu1" data-toggle="collapse" data-target="#submenu1">
                    <span className="d-none d-sm-inline">Payments</span>
                    </a>
                    <div className="collapse" id="submenu1" aria-expanded="false">
                        <ul className="flex-column pl-2 nav">
                            <li className="nav-item"><a className="nav-link py-0" href="#"><span>Initiate Fund Transfer</span></a></li>
                            <li className="nav-item"><a className="nav-link py-0" href="#"><span>Fetch Status</span></a></li>

                           
                        </ul>
                    </div>
                </li>

                <li className="nav-item">
                    <a className="nav-link collapsed text-truncate" href="#submenu2" data-toggle="collapse" data-target="#submenu2">
                    <span className="d-none d-sm-inline">Bankings</span>
                    </a>
                    <div className="collapse" id="submenu2" aria-expanded="false">
                        <ul className="flex-column pl-2 nav">
                            <li className="nav-item"><a className="nav-link py-0" href="#"><span>Fetch balance</span></a></li>
                            <li className="nav-item"><a className="nav-link py-0" href="#"><span>Fetch Account Statement</span></a></li>
                            <li className="nav-item"><a className="nav-link py-0" href="#"><span>Create Virtual Account</span></a></li>
                            <li className="nav-item"><a className="nav-link py-0" href="#"><span>Update Virtual Account</span></a></li>
                        </ul>
                    </div>
                </li>
                <h3><span>UPI</span></h3>
                <li className="nav-item">
                    <a className="nav-link collapsed text-truncate" href="#submenu3" data-toggle="collapse" data-target="#submenu3">
                    <span className="d-none d-sm-inline">Virtual UPI ID</span>
                    </a>
                    <div className="collapse" id="submenu3" aria-expanded="false">
                        <ul className="flex-column pl-2 nav">
                            <li className="nav-item"><a className="nav-link py-0" href="#"><span>Create UPI ID</span></a></li>
                            <li className="nav-item"><a className="nav-link py-0" href="#"><span>Deactive UPI</span></a></li>
                            <li className="nav-item"><a className="nav-link py-0" href="#"><span>Activate UPI</span></a></li>
                            <li className="nav-item"><a className="nav-link py-0" href="#"><span></span></a></li>
                        </ul>
                    </div>
                </li>

                <li className="nav-item">
                    <a className="nav-link collapsed text-truncate" href="#submenu4" data-toggle="collapse" data-target="#submenu4">
                    <span className="d-none d-sm-inline"> UPI Collection Request </span>
                    </a>
                    <div className="collapse" id="submenu4" aria-expanded="false">
                        <ul className="flex-column pl-2 nav">
                            <li className="nav-item"><a className="nav-link py-0" href="#"><span>Create UPI Collect</span></a></li>
                            <li className="nav-item"><a className="nav-link py-0" href="#"><span>Fetch UPI Collect</span></a></li>
                            <li className="nav-item"><a className="nav-link py-0" href="#"><span>List Upi Collection</span></a></li>
                            <li className="nav-item"><a className="nav-link py-0" href="#"><span>Search UPI Collection</span></a></li>
                        </ul>
                    </div>
                </li>

                
                <li className="nav-item"><a className="nav-link text-truncate" href="#"> <span className="d-none d-sm-inline">Banking</span></a></li>
                <li className="nav-item"><a className="nav-link text-truncate" href="#"> <span className="d-none d-sm-inline">Virtual UPI ID</span></a></li>
                <li className="nav-item"><a className="nav-link text-truncate" href="#"> <span className="d-none d-sm-inline">UPI Collection Request</span></a></li>
            </ul>
            
        </div>
        <div className="col pt-2">
            <h2>
                <a href="" data-target="#sidebar" data-toggle="collapse" className="d-md-none"></a> Payuguru (1.0.0)
            </h2>
            <h6 className="hidden-sm-down hypo">Payuguru Partner APIs are completely RESTful and all our responses are returned in JSON.</h6>
            <p></p>

            <h2>
                <a href="" data-target="#sidebar" data-toggle="collapse" className="d-md-none"></a> API URL
            </h2>
            <h6 className="hidden-sm-down hypo">The Payuguru Partner API URL is https://partners.Payuguru.in. You need to include this before each API endpoint to make API calls.</h6>
            <p></p>

            <h2>
                <a href="" data-target="#sidebar" data-toggle="collapse" className="d-md-none"></a> Payments
            </h2>
            <h6 className="hidden-sm-down hypo">This section explains how to initiate a fund transfer to any bank account and check the status of the transaction.</h6>
            <p></p>

            <h2>
                <a href="" data-target="#sidebar" data-toggle="collapse" className="d-md-none"></a> Payuguru (1.0.0)
            </h2>
            <h6 className="hidden-sm-down hypo">Payuguru Partner APIs are completely RESTful and all our responses are returned in JSON.</h6>
            <p></p>
        </div>
    </div>
</div>

</div>

  )
}
export default Docs;
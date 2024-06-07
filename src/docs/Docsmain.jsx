import  {React, useState } from 'react';
import './Docsmain.css';

function Docsmain() {

    

  return (
    <>
    <div className="container-fluid">
        <div className="row bxcHYI">
        
        <div className="col-2 collapse show d-md-flex bg-light pt-2 pl-0 min-vh-100 jzMYjV" id="sidebar" >
            <div className="sc-feJyhm YzuTm">
                <a href="/" className="sc-iELTvK cCiYxb">
                    <img src="assets/img/logo.webp" alt="logo" className="sc-kafWEX hZCbNs"/>
                </a>
            </div>
            {/**search bar field section */}

            <div role="search" class="sc-esOvli kKQhLA">
                <input placeholder="Search..." type="text" class="sc-cmthru kzNiFq search-input" value=""/>
            </div>
            
                <ul className="nav flex-column flex-nowrap overflow-hidden content1">
                    <li className="nav-item gcUzvG">
                        <a className="nav-link text-truncate" href="#"><i className="fa fa-home"></i> <span className="d-none d-sm-inline">API URL</span></a>
                    </li>
                    <li className="nav-item gcUzvG">
                        <a className="nav-link collapsed text-truncate" href="#submenu1" data-toggle="collapse" data-target="#submenu1"><i className="fa fa-table"></i> <span className="d-none d-sm-inline">Payments</span></a>
                        <div className="collapse" id="submenu1" aria-expanded="false">
                            <ul className="flex-column pl-2 nav">
                                <li className="nav-item"><a className="nav-link py-0" href="#"><span>Initiate Fund Transfers</span></a></li>
                                <li className="nav-item"><a className="nav-link py-0" href="#"><span>Fetch Status</span></a></li>
                                
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item gcUzvG">
                        <a className="nav-link collapsed text-truncate" href="#submenu2" data-toggle="collapse" data-target="#submenu2"><i className="fa fa-table"></i> <span className="d-none d-sm-inline">Banking</span></a>
                        <div className="collapse" id="submenu2" aria-expanded="false">
                            <ul className="flex-column pl-2 nav">
                                <li className="nav-item"><a className="nav-link py-0" href="#"><span>Fetch Balance</span></a></li>
                                <li className="nav-item"><a className="nav-link py-0" href="#"><span>Fetch Connected Banking </span></a></li>
                                
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item gcUzvG"><a className="nav-link text-truncate" href="#"><i className="fa fa-bar-chart"></i> <span className="d-none d-sm-inline">Virtual UPI ID</span></a></li>
                    <li className="nav-item gcUzvG"><a className="nav-link text-truncate" href="#"><i className="fa fa-download"></i> <span className="d-none d-sm-inline">UPI Collection Request</span></a></li>
                </ul>
        </div>
                {/**main content side start */}
                <div className="col pt-2 iniCdN api-content">
                    <div className="sc-ifAKCX dluJDj">
                        <div className="sc-bxivhb cjtbAK api-info">
                                <h1 className="sc-htoDjs sc-fYxtnH dTJWQH">PayuGuru <span>(1.0.0)</span></h1>
                                <div className="sc-jWBwVP sc-iRbamj flfxUM"></div>
                            <div className="sc-jWBwVP sc-iRbamj flfxUM"><p>PayuGuru Partner APIs are completely RESTful and all our responses are returned in JSON.</p></div>
                        </div>
                    </div>

                
                <div className="sc-ifAKCX dluJDj">
                        <div className="sc-bxivhb cjtbAK api-info">
                               <h1 className="sc-htoDjs sc-fYxtnH dTJWQH">API URL <span></span></h1>
                             <div className="sc-jWBwVP sc-iRbamj flfxUM"></div>
                            <div className="sc-jWBwVP sc-iRbamj flfxUM"><p>The PayuGuru Partner API URL is https://partners.PayuGuru.in. You need to include this before each API endpoint to make API calls.</p></div>
                        </div>
                </div>
                <div className="sc-ifAKCX dluJDj">
                        <div className="sc-bxivhb cjtbAK api-info">
                              <h1 className="sc-htoDjs sc-fYxtnH dTJWQH">Payments <span></span></h1>
                             <div className="sc-jWBwVP sc-iRbamj flfxUM"></div>
                            <div className="sc-jWBwVP sc-iRbamj flfxUM"><p>This section explains how to initiate a fund transfer to any bank account and check the status of the transaction.</p>
                        </div>
                    </div>
                </div>
                <div className="sc-ifAKCX dluJDj">
                    <div className="sc-bxivhb cjtbAK api-info">
                          <h1 className="sc-htoDjs sc-fYxtnH dTJWQH">Initiate Fund Transfers<span></span></h1>
                            <div className="sc-jWBwVP sc-iRbamj flfxUM"></div>
                            <div className="sc-jWBwVP sc-iRbamj flfxUM"><p>Transfer amount to any bank account.</p></div>
                    </div>
                </div>
                
                <div id="" data-section-id="" class="sc-ifAKCX hiuczA"></div>
        </div>
            {/**right hand side content start  */}
                <div className="col pt-2 fLUKgj">
                    <h2>
                        <a href="" data-target="#sidebar" data-toggle="collapse" className="d-md-none"><i className="fa fa-bars"></i></a><span></span></h2>
                    <h6 className="hidden-sm-down"></h6>
                    <p></p>
                </div>
           
            
        </div>
    </div>
    
    
      
    </>
  )
}
export default Docsmain;

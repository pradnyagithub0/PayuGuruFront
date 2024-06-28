import React, { Suspense, useEffect, useRef, useState } from 'react';
import Dropdown from "react-bootstrap/Dropdown";
import { useNavigate, useHistory  } from "react-router-dom";
import { Link } from "react-router-dom";
import { ENDPOINTS } from "../utils/apiConfig";
import "./Dheader.css";
import {useTheme} from "./theme-context";
import { Nav, Navbar } from 'react-bootstrap';
import Notifications from './Dashboard/commonComponents/Notification';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { ModeToggle } from './mode-toggle';

const Header = () => {
  const Logout_API = ENDPOINTS.LOGOUT_REQUEST;
  const sessionid = sessionStorage.getItem("sessionid");
  const [showNotifications, setShowNotifications] = useState(false);
  let navigate = useNavigate();

  const {theme, toggleTheme} = useTheme();

  const toggleMode = () => {
    toggleTheme();
  };

  const handleLogout = async () => {
    try {
      const response = await fetch(Logout_API, {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sessionid: sessionid,
        }),
      });

      const resData = await response.json();

      if (resData.StatusCodes) {
        if (resData.StatusCodes === "U00") {
          sessionStorage.removeItem("sessionid");
          localStorage.removeItem('clientId');
          navigate(`/login`);
        } else {
          alert(resData.message);
        }
      } else {
        // Handle unexpected response structure
        console.error("Unexpected response structure:", resData);
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };
  

  


  return (
    <div>
      <header className={`h-theme ${theme} theme-controller`}>
       <div>
       <nav className="container-fluid navbar navbar-expand-lg px-5">
          <div className="navbar-brand" href="">
            <img
              src="https://i.ibb.co/GTr3w2M/logo.webp"
              alt="logo"
              width="150"
              height="25"
            />
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
      {/* <ModeToggle/> */}
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">

              <li className="nav-item my-auto items-center">
                  <div>
                  <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round">
                        <circle cx="12" cy="12" r="5" />
                        <path
                          d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                      </svg>
                  </div>
              </li>

              <li className="nav-item my-auto items-center ">
                  <div className="mode-switch">
                  
                
                  <label className="flex cursor-pointer gap-2">
                
                <input
                    type="checkbox"
                    onChange={toggleMode}
                    checked={theme === "dark"}
                  />
                  <span className="slider round"></span>
                
            </label>    
              
                </div>
                      
              </li>

              <li className="nav-item my-auto items-center">
              <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                  </svg>
              
                  </div>
              </li>

              <li className="nav-item my-auto">
                <Link className="nav-link" to="/docs">API Docs</Link>

                {/* <a href="api" className="nav-link">
                  API Docs
                </a> */}
              </li>
              
              <li className="nav-item my-auto ">
                <Link className="nav-link"  to="/kybform">Status</Link>
                {/* <a href="kybform" className="nav-link">
                  Status
                </a> */}
              </li>
                
              {/* <li className="nav-item my-auto">
               <FontAwesomeIcon icon="fa-regular fa-message" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                  <Dropdown onToggle={() => setShowNotifications(!showNotifications)}>
                    <Dropdown.Toggle variant="h-theme" id="dropdown-basic">
                   
                    </Dropdown.Toggle>
                    {showNotifications && (
                      <Suspense fallback={<div>Loading...</div>}>
                        <Notifications />
                      </Suspense>
                    )}
                  </Dropdown>
                </Nav>
              </Navbar.Collapse>
              </li> */}
              <li className="nav-item dropdown">
                <Dropdown>
                  <Dropdown.Toggle variant="Secondary'" id="dropdown-basic">
                    <img
                      src="https://i.ibb.co/WKxztwB/profile.png"
                      alt="imageAvtar"
                    ></img>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="/userprofile">Profile</Dropdown.Item>
                    <Dropdown.Item href="/account">Setting</Dropdown.Item>
                    <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </li>
            </ul>
          </div>
          
        </nav>
       </div>
      </header>

      <div className="sidebar sidebar-collapse" id="navbarSupportedContent">
        <ul>
          <li className="active">
            <Link exact to="/dashboard">
              <i className="fa fa-home bg-white text-dark rounded-circle fa-lg mr-2"></i>
              Home
            </Link>
          </li>
          <li className="">
            <Link exact to="/Virtualaccount">
              <span>
                <i className="fa fa-bank bg-blue p-xy rounded-circle fa-lg mr-2"></i>
                Virtual Account
              </span>
            </Link>
          </li>
          <li className="">
            <Link to="/upi" >
              <i className="fa fa-cube bg-primary rounded-circle fa-lg mr-2"></i>
              UPIS
            </Link>
          </li>
          <li className="">
            <Link to="/reports">
              <i className="fa fa-file bg-pink rounded-circle fa-lg mr-2"></i>
              Reports
            </Link>
          </li>
          <li className="">
            <Link to="/invoices">
              <i className="fa fa-file bg-purple rounded-circle fa-lg mr-2"></i>
              Invoices
            </Link>
          </li>
          <li className="">
            <Link to="/account">
              <i className="fa fa-cog bg-success rounded-circle fa-lg mr-2"></i>
              Settings
            </Link>
          </li>
          <li className="">
            <Link onClick={handleLogout} to='/'>
             <i
                className="fa fa-power-off bg-warning rounded-circle fa-lg mr-2"
               
              ></i>
              Logout
            </Link>
          </li>
        </ul>
        <div className="sidebar-card">
          <div className="card-body">
            <img src="https://i.ibb.co/PtMRfwP/card-img.png" alt="card-img" />
            <h3>Got Premium</h3>
            <p>Lots of Service</p>
            <button className="btn bg-white btn-rounded">Subscribe Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
import React, { useState, useEffect } from 'react';
import { HStack, Stack, Toggle } from 'rsuite';
import { IconButton, ButtonToolbar, ButtonGroup, Button } from 'rsuite';
import { Icon } from '@rsuite/icons';
import { FaUserClock } from "react-icons/fa";
import 'rsuite/Stack/styles/index.css';
import 'rsuite/IconButton/styles/index.css';



const ClockCustomeButton = ({appearance, formatTime,time , toggleTimeFormat}) => (
  
    <ButtonToolbar>
      <ButtonGroup>
        <HStack>
        <IconButton appearance={'ghost'} icon={ <Icon as={FaUserClock } size="1em" className='rs-btn-icon rs-btn-icon-placement-left rs-btn rs-btn-sm'  onClick={toggleTimeFormat}/>}  style={{marginLeft:'9rem'}}>
        {formatTime(time)}
        </IconButton>
        </HStack>
            
            {/* <IconButton appearance={'ghost'}> */}
            {/* {formatTime(time)} */}
            {/* </IconButton> */}
        </ButtonGroup>
    </ButtonToolbar>
);

const Clock = () => {
  // State to hold the current time
 const [time, setTime] = useState(new Date());
  // Initialize the format state from localStorage or default to true
  const [is24HourFormat, setIs24HourFormat] = useState(() => {
    const savedFormat = localStorage.getItem('is24HourFormat');
    return savedFormat ? JSON.parse(savedFormat) : true;
  });

  // useEffect to update the time every second
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  // Format time according to the current format
  const formatTime = (date) => {
    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    let ampm = '';

    if (!is24HourFormat) {
      ampm = hours >= 12 ? ' PM' : ' AM';
      hours = hours % 12 || 12; // Convert to 12-hour format
    }

    hours = String(hours).padStart(2, '0');

    return `${hours}:${minutes}:${seconds}${ampm}`;
  };

  // Toggle time format between 12-hour and 24-hour and save to localStorage
  const toggleTimeFormat = () => {
    setIs24HourFormat((prevFormat) => {
      const newFormat = !prevFormat;
      localStorage.setItem('is24HourFormat', JSON.stringify(newFormat));
      return newFormat;
    });
  };

  
  return (
    <div style={{ fontFamily: 'monospace', fontSize: '1rem', textAlign: 'center', marginTop:'0.3rem' }}>
      {/* {formatTime(time)} */}
    
        
                    <HStack spacing={10} childrenRenderMode="clone">
                   <HStack spacing={15}>
                   <p className="float-left">
                        <i className="fa fa-info-circle"></i> Your account is pending
                        activation. Please submit your documents to payuguru.com
                    </p>
                   {/* <Toggle size="sm"   onChange={toggleTimeFormat}></Toggle> */}
                  
                   </HStack>
                   <HStack>
                   <ClockCustomeButton appearance={'ghost'} formatTime={formatTime} time={time} toggleTimeFormat={toggleTimeFormat}/>
                   </HStack>
                    </HStack >
                  {/* <HStack  spacing={10} childrenRenderMode="clone">
               h
              
              </HStack > */}
    </div>
  );
};



export default Clock;

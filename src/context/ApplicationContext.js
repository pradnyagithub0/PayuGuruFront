import React, { createContext, useState } from 'react';

export const ApplicationContext = createContext();

export const ApplicationContextProvider = ({ children }) => {
  const [clientId, setClientId] = useState(null);
  const [otherState, setOtherState] = useState(null);

  console.log('ApplicationContextProvider clientId:', clientId); // Debug log

  return (
    <ApplicationContext.Provider value={{ clientId, setClientId, otherState, setOtherState }}>
      {children}
    </ApplicationContext.Provider>
  );
};

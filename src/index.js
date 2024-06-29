import React from "react";
import ReactDom from 'react-dom/client';
import Routing from './Routing';
import './assets/css/customStyle.css';
// import { ThemeProvider } from "@material-tailwind/react";
import { ApplicationContextProvider } from './context/ApplicationContext'; 
// import {ThemeProvider} from './app/components/theme-provider';
// import { Theme } from '@radix-ui/themes';

import {ThemeProvider} from './components/theme-context';
const container = document.getElementById('root');

const root = ReactDom.createRoot(container);
root.render(
<> 

  <React.StrictMode>
  <ThemeProvider>
  <ApplicationContextProvider>
    <Routing />
  </ApplicationContextProvider>
   </ThemeProvider>
  </React.StrictMode>
</>
);

import React from "react";
import ReactDom from 'react-dom/client';
import Routing from './Routing';
import './assets/css/customStyle.css';
const container = document.getElementById('root');
const root = ReactDom.createRoot(container)
root.render(<Routing/>)

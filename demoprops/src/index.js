import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import TwoWayBinding from './TwoWayBinding';
import Product from './Product';
import FunctionComp from './FunctionComp';
import ProductClass from './ProductClass';
import FunctionProps from './FunctionProps';
import FunctionParent from './FunctionParent';

ReactDOM.render(
  <React.StrictMode>
<FunctionParent></FunctionParent>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App'

import reportWebVitals from './reportWebVitals';
import App from './App';
import App2 from './App2'


const data = "Hello from react 3 "
const testFunction = ()=>{
 const  a = false
  if(a){
  return <h1>hello from a function</h1>
  }
  else{
    return <h1>hello from a function2</h1>
    }
}
const obj  = {testname : "Ali",age :23}
const node  = <h1 className='test'>{testFunction()}</h1>
//const node  = React.createElement("h1",null,"Hello from react 2")

ReactDOM.render(
  <React.Fragment>
    <App></App>,
  <App2></App2>
  </React.Fragment>
 ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

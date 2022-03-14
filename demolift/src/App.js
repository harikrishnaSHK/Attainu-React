import logo from './logo.svg';
import './App.css';
import InputMessage from './InputMessage';
import DisplayMessage from './DisplayMessage';
import React, { useState } from "react"

function App() {

const[message,setMessage] = useState("hi")

  return (

   <React.Fragment>
     <div style={{textAlign:"center" ,marginTop : "30px"}}>

  <InputMessage setMessage = {setMessage}></InputMessage>
  <DisplayMessage message= {message}></DisplayMessage>


     </div>
   

   </React.Fragment>

  );
}

export default App;

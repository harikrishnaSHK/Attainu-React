import logo from './logo.svg';
import './App.css';
import FunctionApi from './FuntionApi';
import { useState } from 'react';

function App() {

const[toggle,setToggle] = useState(true)

  return (
    <div className="App">
    
     <button onClick={()=>{
       setToggle(!toggle)
     }}>Toggle The Component</button>


{toggle && <FunctionApi></FunctionApi>}
    </div>
  );
}

export default App;

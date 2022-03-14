import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import { useState } from 'react';

function App() {

let[show,setShow] = useState(true)  


const toggelCounter = () =>{

 setShow(show = !show)

}

  return (
    <div className="App">
    {show && <Counter colour = {"red"} count = {30}></Counter>}
    <button onClick={toggelCounter} >Toggel</button>

    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import {useMemo, useState} from "react"


const add = (num1,num2) =>{


  console.log("inside add function")
  return  parseInt(num1) + parseInt(num2)



}
function App() {

 const [someRandom,setSomeRandom]=useState()
 const [num1,setNum1] = useState(0)
 const [num2,setNum2] = useState(0)

const result  = useMemo(()=>{return add(num1,num2)},[num1,num2])

//const result = add(num1,num2)
  return (
    <div className="App">

      <input placeholder='somerndom' type="text" value={someRandom} onChange={(e)=>{


     
       setSomeRandom(e.target.value)

      }}></input>

     <input type="text" value={num1} onChange={(e)=>{

     setNum1(e.target.value)

     }}></input>
     
     <input  type="text" value={num2} onChange={(e)=>{



setNum2(e.target.value)

}}></input>

<p>result  is {result}</p>

    </div>
  );
}

export default App;

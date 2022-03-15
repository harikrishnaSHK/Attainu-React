import { useCallback, useState,memo } from "react"


const addNumber=(num1,num2)=>{
  
    console.log("Inside add number")

  let result  = parseInt(num1) + parseInt(num2)

  return result

}
const App2= () =>{


const [random,setRandom] = useState('')
const [num1,setNum1] = useState(0)
const [num2,setNum2] = useState(0)


//const result = addNumber(num1,num2)
const result  = useCallback(()=>{ return addNumber(num1,num2)},[num1,num2])
const value = result()
return(

 <div>

 <input type ="text"  value ={random} onChange={

(e)=>{
    setRandom(e.target.value)
}
 

 }></input>


<input type ="text"  value ={num1} onChange={

(e)=>{
    setNum1(e.target.value)
}
 

 }></input>


<input type ="text"  value ={num2} onChange={

(e)=>{
    setNum2(e.target.value)
}
 

 }></input>

 <h1>{value}</h1>


 </div>

)


}

export default memo(App2)
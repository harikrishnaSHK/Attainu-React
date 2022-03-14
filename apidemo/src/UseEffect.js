import React, { useState,useEffect } from "react"


const UseState = ()=>{

const[count,setCount] = useState(0)
const[count2,setCount2] = useState(0)
const[count3,setCount3] = useState(0)
const[calculate,setCalculate] = useState(0)

useEffect(()=>{

console.log("inside use state")

setTimeout(()=>{

setCount(count+1)

},1000)


})

useEffect(()=>{

    console.log("inside use state")
    
    setTimeout(()=>{
    
    setCount2(count2+1)
    
    },1000)
    
    
    },[])
useEffect(()=>{

        console.log("inside use state")
        
       setCalculate(count3 * 2)
        
        },[count3])




return(

  <React.Fragment>

   <h1>Count1 value is {count}</h1>
   <h1>Count2 value is {count2}</h1>
   <h1>Count3 value is {count3}</h1>
   <h1>calculate value is {calculate}</h1>
   <button onClick={()=>{setCount3(count3+1)}}>Increase count 3</button>

  </React.Fragment>  

)

}


export default UseState
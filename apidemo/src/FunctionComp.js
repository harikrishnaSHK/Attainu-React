import React, {useState,useEffect } from "react"

const FunctionComp = () =>{


const [count1 ,setCount1] = useState(0) 
const [count2 ,setCount2] = useState(0) 
const [count3 ,setCount3] = useState(0) 
const [multiply,setMultiply] = useState(0)

useEffect(()=>{
console.log("from use effect")
setTimeout(()=>{

setCount1((count1)=>count1+1)

},1000)


})


useEffect(()=>{
    console.log("from use effect")
    setTimeout(()=>{
    
    setCount2((count2)=>count2+1)
    
    },1000)
    
    
    },[])


useEffect(()=>{
 console.log("from use effect")
 setMultiply(count3 * 2   )    
        
        },[count3])


return(


<React.Fragment>


<h1>count value is {count1}</h1>
<h1>count value is {count2}</h1>
<h1>Multiply value {multiply}</h1>
<button onClick={ ()=>setCount3((c)=>c+1)}>Increase Count</button>
</React.Fragment>


)

}

export default FunctionComp
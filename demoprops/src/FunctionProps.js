import React, { useState } from "react"
import FunctionPropsChild from "./FunctionPropsChild"

const FunctionProps = ()=>{


let [greetings,setGreetings] = useState("Hi")

const changeGreetings = ()=>{
setGreetings(greetings = "Changed messege")

}

return(
<React.Fragment>

<FunctionPropsChild greeting = {greetings}></FunctionPropsChild>
<button onClick={changeGreetings}> Change Messeage</button>
</React.Fragment>


)

}

export default FunctionProps
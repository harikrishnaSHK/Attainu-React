import React, { useState } from "react"
import FunctionChild from "./FunctionChild"

const FunctionParent= ()=>{

let[show,setShow]= useState(false)

const changeShow = ()=>{

setShow(show= !show)

}



return(


    <React.Fragment>

{show && <h1>From parent Component</h1>}
<FunctionChild showParent = {changeShow} temp = {show}></FunctionChild>

    </React.Fragment>

    

)

}

export default FunctionParent
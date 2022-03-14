
import React, { useState } from "react"
import Component3 from "./Component3"

const Component2 = (props) =>{


//props drilling

    return(

        <React.Fragment>
            
        <h1>From Component 2 {props.name}</h1>
        <Component3 name = {props.name}></Component3>
        </React.Fragment>

        
        )
}

export default Component2
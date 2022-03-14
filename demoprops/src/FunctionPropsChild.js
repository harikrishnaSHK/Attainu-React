import React from "react"

const FunctionPropsChild =(props)=>{


    console.log(props)
return(
<React.Fragment>

<h1>From child Component</h1>
<h1>{props.greeting}</h1>

</React.Fragment>


)

}

export default FunctionPropsChild
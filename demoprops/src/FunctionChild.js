import React from "react"

const FunctionChild = (props)=>{

return(
<React.Fragment>

{ !props.temp && <h1>From child component</h1>}

<button onClick={props.showParent}>Show Parent</button>

</React.Fragment>


)

}

export default FunctionChild
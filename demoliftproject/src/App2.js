import Counter from "./Counter"
import React, { useState } from "react"

const App2 = (props)=>{

let[disable,setDisable] = useState(false)

const showCount = ()=>{

    setDisable(disable = !disable)
}
return(
<React.Fragment>

{disable && <Counter></Counter>}
<button  onClick={showCount}>Add Counter</button>
</React.Fragment>


)

}

export default App2
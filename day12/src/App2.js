
import { Fragment,useState } from "react"
import Component1 from "./Components/Component1"
import Component2 from "./Components/Component2"
const App2 = () =>{
    const[name,setName] = useState("hari")
    //Lifting up of state

return(
<Fragment>

 <Component1 name = {name}></Component1>
 <Component2 name = {name}></Component2>


</Fragment>

)


}

export default App2
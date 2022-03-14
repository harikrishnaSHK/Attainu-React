
import { Fragment } from "react"
import Counter from "./Counter"
import CounterContextProvider from "./Context/CounterContext2"
import IncreaseCounter from "./IncreaseCounter"
import DecreaseCounter from "./DecreaseCounter"
const App3  = () =>{

return(
<CounterContextProvider>

<Fragment>

  

<Counter></Counter>
<IncreaseCounter></IncreaseCounter>
<DecreaseCounter></DecreaseCounter>

</Fragment>


</CounterContextProvider>


)

}


export default App3 
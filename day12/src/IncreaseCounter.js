import { useContext } from "react"
import { CounterContext } from "./Context/CounterContext2"

const IncreaseCounter  = () =>{

const {increaseHandler} = useContext(CounterContext)

return(


<button onClick={increaseHandler}>Increases</button>

)

}

export default IncreaseCounter
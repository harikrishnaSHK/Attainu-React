
import { useContext } from "react"
import { CounterContext } from "./Context/CounterContext2"
const DecreaseCounter  = () =>{

const {decreaseHandler} = useContext(CounterContext)

    return(
    
    
    <button onClick={decreaseHandler}>Decreases</button>
    
    )
    
    }
    
    export default DecreaseCounter

import { useContext } from "react"
import { CounterContext } from "./Context/CounterContext2"
const Counter2 = ()=>{


 const {count} = useContext(CounterContext)   

return(

<h1>My count from another componenet {count}</h1>

)

}

export default Counter2
import { createContext, useState } from "react";


export const CounterContext = createContext()

function CounterContextProvider(props){

const [count,setCount] = useState(5) 

function increaseHandler(){

    setCount(count+1)
}

function decreaseHandler(){

    setCount(count-1)
}
return(


<CounterContext.Provider value={{count,increaseHandler,decreaseHandler}}>

{props.children}

</CounterContext.Provider>


)

}


export default CounterContextProvider


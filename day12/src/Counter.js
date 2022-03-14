

import { Fragment, useEffect, useState,useContext } from "react"
import { CounterContext } from "./Context/CounterContext2"

const Counter  = () =>{


const {count,increaseHandler,decreaseHandler} = useContext(CounterContext)




return(

 <Fragment>

<h1>Count Value is  {count}</h1>



 </Fragment>


)




}

export default Counter
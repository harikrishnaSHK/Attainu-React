import { Fragment, useReducer, useState } from "react"


function reducer(state,action){
  
    switch (action.type){
      case "increment":
        return {count2 :state.count2+1,name:"hari increase"}
      case "decrement":
        return {count2 : state.count2-1,name:"hari decrease"}
      case "icreaseByFive":  
      return {count2 : state.count2+action.payload.value,name:state.name}
      default:
        return {count2 :state.count2,name:state.name}
    }
    



}

const Counter = ()=>{


const [state,dispatch] = useReducer(reducer,{count2:3,name : "hari"})



  function IncreaseReducerCount(){

  dispatch({type:"increment"})

  }

  function DecreaseReducerCount(){

  dispatch({type:"decrement"})

  }


  function IncreaseByFive(){

  dispatch({type : "icreaseByFive" ,payload : {value :5}})

  }


 

    
 


return(

<Fragment>

 <h1>Count from reducer is  {state.count2}</h1>

 <button onClick={IncreaseReducerCount}>Increase Reducer</button>
 <button onClick={DecreaseReducerCount}>Decrease Reducer</button>
 <button onClick={IncreaseByFive}>Increase by 5</button>
 <h1>{state.name}</h1>

</Fragment>



)


}


export default Counter
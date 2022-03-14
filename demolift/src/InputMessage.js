import React, {useState}from "react"

const InputMessage = (props)=>{


const  changeMesage  = (event)=>{

 event.preventDefault()
 props.setMessage(event.target.value)

}

return(


<input type = "text" onChange={changeMesage}></input>


)

}

export default InputMessage
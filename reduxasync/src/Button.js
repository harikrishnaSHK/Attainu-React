import {memo} from "react"
const Button = (props) =>{

console.log("Inside the Butto")

return(

     <div>
   
     <p>count : {props.count}</p>
     <button onClick={props.handleClick}>Increment</button>

     </div>
)


}

export default memo(Button)
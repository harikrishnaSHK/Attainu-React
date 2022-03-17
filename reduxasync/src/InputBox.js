import {memo} from "react"
const InputBox  =  (props) =>{

console.log("Inside the InputBox")

return(
 <div>
   <input type ="text" value ={props.name} onChange={props.handleClick2}></input>

 </div>


)


}

export default memo(InputBox)
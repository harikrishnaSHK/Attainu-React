import { useState } from "react"
import Button from "./Button"
import InputBox from "./InputBox"
import Title from "./Title"

const App2 = () =>{
    const[count,setCount] = useState(0)
    const[name,setName] = useState("")

    const incrememt = () =>{

     setCount(count+1)

    }

    const updateName = (e) =>{

    setName(e.target.value)

    }


    return(

     <div>
    <Title></Title>
    <Button count ={count} handleClick={incrememt} ></Button>
    <InputBox name = {name} handleClick2 = {updateName}></InputBox>

   

     </div>



    )



}

export default App2

import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
const PageNotFound = () =>{

let navigate  = useNavigate()

useEffect(()=>{

navigate("/posts")

},[])

return(

<h1>Page Not Found</h1>

)

}


export default PageNotFound
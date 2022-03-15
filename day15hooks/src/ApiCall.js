import { Fragment, useEffect, useState } from "react"
import useApiCall from "./useApiCall"


const ApiCall = () =>{


//const user = useApiCall("https://jsonplaceholder.typicode.com/users")
const todos = useApiCall("https://jsonplaceholder.typicode.com/todos")

    return(

<Fragment>

<h1>From api calll</h1>

{todos.length>0 && todos.map(t=> <h1>{t.title}</h1>)}

</Fragment>


    )


}


export default ApiCall
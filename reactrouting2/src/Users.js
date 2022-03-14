import React, { useEffect, useState } from "react"

const Users = ()=>{

const[users,setUsers] = useState([])

useEffect(()=>{

fetch("https://jsonplaceholder.typicode.com/users")
.then((res)=>res.json())
.then((json)=>{

 setUsers(json)

})

},[])

    return(

        <React.Fragment>

       <h1>List of Users</h1>

       {users.length>0 && <p>{users.map((u)=><li>{u.name}</li>)}</p>}
        </React.Fragment>

        
    )

}

export default Users
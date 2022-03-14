import React, { useState ,useEffect} from "react"

const FunctionApi = () =>{
const[posts,setPosts] = useState([])

useEffect(()=>{


    let unmount = true
    console.log("component did mount")

    fetch("https://jsonplaceholder.typicode.com/photos")
    .then((res)=>res.json())
    .then((json)=>{

    if(unmount){

      setPosts(json)
    }

    })

return () =>{

  console.log("Component is unMounting")  
  unmount =false

}



},[])


return(

<React.Fragment>

<h1>Deatils of Posts</h1>
{posts.length>0 ? <p>{posts.map((p)=> <li key = {p.id}>{p.title}</li>)}</p> : <h1>Data is loading</h1>}



</React.Fragment>

)


}


export default FunctionApi
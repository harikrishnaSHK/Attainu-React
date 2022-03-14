import { cleanup } from "@testing-library/react"
import { useEffect, useState } from "react"
import { useParams ,useNavigate } from "react-router-dom"

const Post = () =>{


  const[post,setPost] = useState([])  

 let params = useParams()
 let navigate = useNavigate()
 
 console.log(params)

 useEffect(()=>{

 fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
 .then((res)=>res.json())
 .then((json)=>{

 setPost(json)

 console.log("from the fetch api",json)



 })


 },[params.postId])
return(
    
<div>
<h1>POST DETAILS ARE</h1>
{post && <h1>{post.title}</h1>}
{post && <h1>{post.body}</h1>}
<button onClick={()=>{


 navigate("/posts")


}}>Navigate To Posts</button>
</div>



)

}

export default Post
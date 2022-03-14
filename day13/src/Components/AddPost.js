import { Fragment, useContext, useState } from "react"
import { PostContext } from "../Context/PostContext"


const AddPost = ()=>{

 const {AddPostData,AddPostReducer} = useContext(PostContext)   

const[post,setPost] = useState("")


const SubmitHnadler = (e)=>{

e.preventDefault()

const newPost = {

    name:post
}

AddPostData(newPost)

}
const SubmitHnadler2 = (e)=>{

    e.preventDefault()
    
    const newPost = {
    
        name:post
    }
    
    AddPostReducer(newPost)
    
    }


return(

<Fragment>

<h1>ADD YOUR NEW POST HERE</h1>

    
<input type = "text" value = {post} onChange= {



(e)=>{

 e.preventDefault()   

setPost(e.target.value)


}


}></input>    

<button onClick={SubmitHnadler}>ADD POST</button>

<br/>

<h1>ADD YOUR NEW POST HERE FROM REDUCER</h1>


<input type = "text" value = {post} onChange= {



(e)=>{

 e.preventDefault()   

setPost(e.target.value)


}


}></input>    

<button onClick={SubmitHnadler2}>ADD POST</button>


</Fragment>

)

}


export default AddPost
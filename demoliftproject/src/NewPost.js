import React from "react"

const NewPost = (props) =>{


const submitForm = (event)=>{

event.preventDefault()
console.log(event.target.elements.post.value)

props.setPosts(prevPosts => [...prevPosts,event.target.elements.post.value])

}
const login = (event)=>{
event.preventDefault()
props.setLogin(prevLogin => !prevLogin)

}



    return(
        <React.Fragment>
      {props.isLoggedIn && <div  >

        <h1>Enter the new Post</h1>
              <form onSubmit={submitForm}>
        
               <input type="text" id = "post"></input>
               <button type="submit">Submit</button>
        
               </form>
              

        </div>}
        {!props.isLoggedIn&& 
        <div>
            <h1>Please Login First</h1>
        <button onClick={login}>Login</button>
        </div>}
         

        
        </React.Fragment>
        
            )





}


export default NewPost
import { Fragment, useContext } from "react"
import { PostContext } from "../Context/PostContext"
const DiplayPost = () =>{


const {posts,DeletePostData,state,DeletePostReducer } = useContext(PostContext)

console.log(state)




return(


  <Fragment>

   <h1>BELOW ARE THE POSTS YOU CREATED</h1>
   {posts.map((p)=>
   
   <div>
   <h1>{p.name}</h1>
   {p.name && <button onClick={()=>{

   DeletePostData(p.name)

   }}>DeletePost</button>}
   
   </div>
   

   
   
   
   )}

   <div>
   <h1>BELOW ARE THE POSTS YOU CREATED BY USING REDUCER</h1>
   {state.posts.map((p) =>
   
   
   <div>
       <h1>{p.name}</h1>
       {p.name && <button onClick={()=>{

        DeletePostReducer(p.name)

       }}>DeletePost</button>}

   </div>

   
   )}


   </div>




  </Fragment>

)



}

export default DiplayPost
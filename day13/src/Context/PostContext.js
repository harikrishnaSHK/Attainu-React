import { createContext, useReducer, useState } from "react";

export const PostContext = createContext()


function reducer(state,action){


 if(action.type === "addposts")
 {

    return{
     ...state,
     posts: [...state.posts,action.payload]


    }

 }
 if(action.type === "deletpost"){

  return{

    ...state,
    posts:state.posts.filter(p=>p.name!==action.payload)
  }

 }
 return state

}


function PostContextProvider(props){



        

const[posts,setPost] = useState([{name:"post1"}])

const[state,dispatch] = useReducer(reducer,{posts:[{name:"post from reducer"}]})


const AddPostReducer = (post) =>{


 dispatch({type:"addposts",payload:post})

}

const DeletePostReducer = (name)=>{

dispatch({type:"deletpost",payload:name})

}

const AddPostData = (post) =>{


setPost(prevPost =>[...prevPost,post])

}

const DeletePostData = (name)=>{

    console.log(name)

    const newPost = posts.filter((p)=>p.name!==name)
    console.log("from new posts" + newPost)
    setPost(prevPost=>[...newPost,prevPost])
}





    return(


        <PostContext.Provider value = {{posts,state,DeletePostReducer ,AddPostData,DeletePostData ,AddPostReducer}}>
     
     
        {props.children}
        </PostContext.Provider>
    )



}


export default PostContextProvider
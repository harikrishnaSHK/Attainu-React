import React from "react"
import axios from "axios"


class Products extends React.Component{

constructor(props){

super(props)

this.state={

    posts:[],
    show:false
}

}

componentDidMount(){
    /*fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res)=>res.json())
    .then((json)=>{
   this.setState({

   posts:json,
   show:true

   })
      

    })
    */
 
  axios.get("https://jsonplaceholder.typicode.com/posts").then((res)=>{

   this.setState({

   posts:res.data,
   show:true

   })

  })


}



render(){

 const {posts ,show} = this.state   
 console.log(posts)
return(
<React.Fragment>
<div style={{textAlign : "center"}}>

<h1>POSTS DATA</h1>
{posts.length>0 ? <h1>{posts.map((p)=>(<li>{p.title}</li>))}</h1> :<h1>POSTS ARE LOADING</h1>}



</div>


</React.Fragment>


)

}


}

export default Products
import React from "react"


class Products extends React.Component{

constructor(props)
{

super(props)

this.state = {products : [] , show : false}

}


componentDidMount(){

    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((json) => {
    
      this.setState({
     
      products :json,
      show :true
    
    
      })
    
    })



}


render(){



    const  {products ,show} = this.state

return(
<div>
 <h1>Data of posts</h1>
{products.length>0 ?  <h1>{products.map((post) =>( <li> {post.title}</li>))}</h1> : "products are loading"}




</div>



)


}


}

export default Products
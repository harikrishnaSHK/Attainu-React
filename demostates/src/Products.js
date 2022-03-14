import React from "react"
import './Products.css'


class Products extends React.Component{

constructor(){

super()
this.state = {products  : [{productName :"Iphone ",rating : 4 , discription : "very good product"},
{productName :"Pixel ",rating : 5 , discription : " good product"}    ] ,selectProduct :null}

}




showProducts(product){

var show  = false 

if(this.state.selectProduct == product.productName  ){

    show = true
}

return(

 <div className="products">

 
  <p>
   <span> Name  : {product.productName}</span> <br/>
   <span> Rating  : {product.rating}</span><br/>
   <span>Discription : {show  &&  product.discription}</span>

  </p>

  <button onClick={()=>{ 
      this.setState({selectProduct :product.productName})}
      
      }>Show Discription</button>
  

 </div>


)

}

render(){

const {products }= this.state
return(
<React.Fragment>
<p style={{textAlign :"center" , color :"red" ,fontWeight :"Bolder"}}> Product Details</p> 

{products.map((p)=>{return this.showProducts(p)})}
</React.Fragment>   

)

}

}


export default Products
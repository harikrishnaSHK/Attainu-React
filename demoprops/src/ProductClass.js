import React from "react"
import ProductShowClass from "./ProductShowClass"


class ProductClass extends React.Component{
constructor(){

super()
this.state = {products : [{productName : "mobile" ,cost :100 ,rating:4},{productName : "TV" ,cost :100,rating:5}]}

}

render(){

const {products}  = this.state    
console.log(products)

return(
<div style={{textAlign:"center"}}>
<h1>Product Details</h1>
{products.map((p)=> <ProductShowClass productsData = {p}></ProductShowClass>)}

</div>




)

}

}

export default ProductClass
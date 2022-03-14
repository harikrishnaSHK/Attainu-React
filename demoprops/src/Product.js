import React from "react"

import ProductShow from "./ProductShow"
class Product extends React.Component{

constructor(){

super()
this.state = {productName:"mobile" ,productCost : "1000"}

}



render(){

return(

<ProductShow  productDetails={this.state}></ProductShow>


)


}


}

export default Product
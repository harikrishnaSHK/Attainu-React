import React from "react"

class ProductShow extends React.Component{


render(){

const {productName,productCost} = this.props.productDetails
console.log( "from props",this.props)


return(

<h1>showing the product {productName}  with cost {productCost}</h1>
)

}

}


export default ProductShow
import React from "react"

class ProductShowClass extends React.Component{

render(){
  const {productsData} = this.props

return(
   <React.Fragment>

    
    <p>{productsData.productName}</p>
    <p>{productsData.cost}</p>

   </React.Fragment>


)

}


}
export default ProductShowClass
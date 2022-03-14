import React , {Component} from "react"
import App from './App'


const product = [ {"productNmae":"mobile" , "cost":20},
                {"productNmae" : "tv" ,"cost":100}]




class DemoJSX extends Component{



render(){

return(
    <div>

    <App></App>    


<h1>Hello from the class Component</h1>
<h1>Below are the product details</h1>
 {product.map((pro)=>{
     return (
    <div>
  <div>{pro.productNmae}</div>
  <div>{pro.cost}</div>
  </div>
     )
 })}

    </div>



)

}

}


export default DemoJSX
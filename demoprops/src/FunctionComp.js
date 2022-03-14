import { Fragment ,useState } from "react"
const products = [{productName : "mobile" ,cost :100 ,rating:4},{productName : "TV" ,cost :100,rating:5}]

const FunctionComp = () =>{

let [showRating,setShowRating] = useState(false)

console.log(showRating)


const showRatingHandler=()=>{

 setShowRating(showRating = !showRating)
 console.log("show rating")   
 console.log(showRating)

}


return(


<Fragment>
<div style={{textAlign:"center"}}>

<h1>Product Details</h1>
 <div>
  {products.map((p)=>
  
  <div>

<p> <span>Name :</span>{p.productName}</p>
<p><span>Cost :</span>{p.cost}</p>
<p> <span>Rating :</span>{showRating && p.rating}</p>
  </div>


  
  )}

 </div>

 <button onClick={showRatingHandler}>show rating</button>

</div>


</Fragment>


)


}


export default FunctionComp
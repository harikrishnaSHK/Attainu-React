import React from "react"

const Posts=(props)=>{
console.log(props.posts)

return(
<div>


<ul>

{props.posts.map((p,index)=>


<li key = {index}>{p}</li> )}

</ul>
</div>

)

}

export default Posts
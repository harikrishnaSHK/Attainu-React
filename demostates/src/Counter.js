import React from "react"
import  './Counter.css'
class Counter extends React.Component{
constructor(){
super()
//this.count = 0
this.state = {

count:1,
disc:"This is counter Project" 

}
}

increaseCount =() =>{


this.setState({count : this.state.count+1 , disc : "This is updated counter project"})

console.log("Button clicked")

}

render(){

return(

<div className="counter">
<h1>{this.state.disc}</h1>
<h1>the count value {this.state.count} </h1>
<button onClick = {this.increaseCount}>click</button>
<h1>test {1+1}</h1>

</div>


)


}


}



export default Counter
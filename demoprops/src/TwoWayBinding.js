import React, {Component,Fragment} from "react"

class TwoWayBinding extends Component{

 constructor(){

    super()
    this.state ={message :"enter you msg above"}

 }


 changeMessage = (event)=>{
    event.preventDefault()
    console.log(event.target.value)
    this.setState({message :event.target.value})
 }


 render(){

 return(
<Fragment>

<input type ="text" value={this.state.message} onChange={this.changeMessage}></input>
<h1>{this.state.message}</h1>

</Fragment>

 )

 }

}

export default TwoWayBinding
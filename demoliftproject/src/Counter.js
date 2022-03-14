import React from "react"

class Counter extends React.Component{

constructor(props)
{
 super(props)
 console.log("Hi from Constructor")
 console.log("------------------")

 this.state = {count : 0}

}

increase = ()=>{

this.setState({count : this.state.count+1})

}


componentDidMount(){

console.log("From component did mount")
console.log("--------------------------")

}

componentDidUpdate(){

console.log("Updated the component from compinent did update")
console.log("-----------------------------------------------")

}

componentWillUnmount(){
console.log("component is removed and I am Component Will Unmount")
console.log("----------------------------------------------------")

}

render(){

 console.log("From render Method")
 console.log("------------------")   

return(

    <React.Fragment>
     <h1>{this.state.count}</h1>
     <button onClick={this.increase}>Increase</button>
     

    </React.Fragment>
)


}


}

export default Counter
import React from "react"



class Counter extends React.Component{


constructor(props){


    console.log("From Constructor")
    console.log("*****************")

   super(props)

   this.state = { count : 0 ,colour : "blue" }

    }


    increase = ()=>{

   this.setState({count : this.state.count+1})

    }
    decrease = ()=>{

        this.setState({count : this.state.count-1})
     
         }
         changeColour = ()=>{

            this.setState({colour : "green"})
         
             }
   
static getDerivedStateFromProps(props,state){

    console.log("From static method getDerivedStateFromProps")


    return {colour : props.colour , count :props.count}
}




getSnapshotBeforeUpdate(prevProps,prevState){


 console.log(prevState.count)

 return null

}




componentDidMount(){
    console.log("From Component Did Mount")
    console.log("*****************") 
}

shouldComponentUpdate(){
    console.log("From compoonent should update")
    console.log("*****************") 

    return true
}

componentDidUpdate(){

    console.log("From Component Did Update")
    console.log("*****************") 

}

componentWillUnmount(){

    
    console.log("From Component is unmounted")
    console.log("*****************") 
}


render(){
    console.log("From Render")
    console.log("*****************")
return(

<React.Fragment>

<h1 style={{color : this.state.colour}}>count values is {this.state.count}</h1>

<button onClick={this.increase}>Incrrement</button>

<button onClick={this.decrease}>Decrement</button>

<button onClick={this.changeColour}>chnageColour</button>
<h1> hi {this.props.test2}</h1>


</React.Fragment>


)

}




}

export default Counter
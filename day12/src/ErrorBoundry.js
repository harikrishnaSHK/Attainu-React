import { Component } from "react";


class ErrorBoundry extends Component{

constructor(props){


super(props)

this.state= {

    hasError : false
}

}


static getDerivedStateFromError(error){

    return{

        hasError :true
    }
}

componentDidCatch(error,errorInfo){

    console.log("From error" ,error,errorInfo)
}


render(){

    if(this.state.hasError){

        return <h1>Error in the Application</h1>
    }

    return this.props.children

}


}


export default ErrorBoundry
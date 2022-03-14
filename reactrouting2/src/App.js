import logo from './logo.svg';
import './App.css';
import {Link,NavLink} from "react-router-dom"
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div>

<div style={{height:"100px",backgroundColor :"blueviolet",color:"white",display:"flex",}} >

<h1>Attainu</h1>
<nav style={{color:"white" ,marginTop: "35px",marginLeft:"18px",fontWeight:"bold",fontSize:"20px"}}>



 <NavLink style={({isActive}) =>{
  return{

    fontWeight : isActive ? "bolder" : "",
    color : isActive ? "whitesmoke" : "grey"

  }

 }} to='/posts'>Posts</NavLink>
 <NavLink style={({isActiv}) =>{
  return{

    fontWeight : isActiv ? "bolder" : "",
    color : isActiv ? "whitesmoke" : "grey",
    marginLeft : "20px"

  }

 }} to='/users'>Users</NavLink>

</nav>


</div>
 <Outlet></Outlet>

    </div>

  


  );
}

export default App;

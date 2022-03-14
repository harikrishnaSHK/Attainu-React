import logo from './logo.svg';
import './App.css';
import React , {useState}from "react"
import CountPost from './CountPost'
import NewPost from './NewPost'
import Posts from './Posts'

function App() {

  const [posts,setPosts] = useState(["post1","post2","post3"])

  const [isLoggedIn ,setLogin] = useState(false)

  return (
  <React.Fragment>
 <div style={{textAlign : "center"}}>

 <CountPost posts = {posts}/>
  <Posts posts = {posts}/>
 <NewPost isLoggedIn ={isLoggedIn}  setPosts = {setPosts} setLogin={setLogin}/>

 </div>


  </React.Fragment>
  );
}

export default App;

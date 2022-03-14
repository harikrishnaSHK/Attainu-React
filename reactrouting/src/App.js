import logo from './logo.svg';
import './App.css';
import {Link ,Outlet} from "react-router-dom"

function App() {
  return (
    <div className="App">
     <h1>Social Medial App</h1>
     <nav 
      style={{

       backgroundColor : "#1ABC9C",
        height : "50px"

      }}
     >

     <Link to ="/posts">Posts</Link>
     <Link to ="/friends">Friends</Link>

     </nav>
      <h1>Dashboard data</h1>
     <Outlet></Outlet>


    </div>
  );
}

export default App;

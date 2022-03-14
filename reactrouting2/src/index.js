import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom"
import Posts from './Posts';
import Users from './Users';
import PageNotFound from './PageNotFound';
import Post from './Post';
import PostIndex from './PostIndex';
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>

     <Routes>

     <Route path= '/' element = {<App></App>}>  

     <Route index element = {<Users></Users>}></Route>

      <Route  path = 'posts' element= {<Posts></Posts>}>

      <Route index element={<PostIndex></PostIndex>}></Route>

      <Route path = ":postId" element={<Post></Post>}></Route>

     </Route>

    <Route path = 'users' element = {<Users></Users>}></Route>

    <Route path = "*" element= {<PageNotFound></PageNotFound>}></Route>

     </Route>




     </Routes>

    
    </BrowserRouter>
    
    

   
   
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

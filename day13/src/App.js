import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import AddPost from './Components/AddPost';
import DiplayPost from './Components/DiplayPost';
import PostContextProvider from './Context/PostContext';

function App() {
  return (
    <div className="App">

      <PostContextProvider>

      <AddPost></AddPost>
     <DiplayPost></DiplayPost>

      </PostContextProvider>

    </div>
  );
}

export default App;

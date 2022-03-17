import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import store from './Store/index'
import { fetchData } from './Store/index';

function App() {

  const dispatch = useDispatch()


 const users = useSelector(state=>state.fetchedData)
 const message = useSelector(state=>state.message)
 console.log("before dispatching "+JSON.stringify(users))
 console.log("before dispatching "+ message)


const getUsers = () =>{

dispatch(fetchData())
console.log("after dispatching "+ JSON.stringify(users))
console.log("after dispatching "+ message)

}


  return (
    <div className="App">
   <h1>Below is the fetched data</h1>
   <button onClick={getUsers}>Get Users</button>
   {users.length>0 && users.map(u=><h1>{u.name}</h1>)}

    </div>
  );
}

export default App;

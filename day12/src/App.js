import logo from './logo.svg';
import './App.css';
import TestError from './TestError';
import ErrorBoundry from './ErrorBoundry';

function App() {

  let name  = "hari"
  return (
    <div className="App">

      <ErrorBoundry>
      <TestError name= {name}></TestError>
  

      </ErrorBoundry>


    </div>
  );
}

export default App;

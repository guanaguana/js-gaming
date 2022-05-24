import logo from './logo.svg';
import './App.css';
import List from './list.js'; 

function App() {
  let x="lizar";
  return (
    <div className="App">
     <h1>hello world</h1>
     <p>{x}</p>
     <List />
    </div>
  );
}

export default App;

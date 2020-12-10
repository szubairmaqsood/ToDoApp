import React,{useState} from 'react';
import './App.css';

function App() {
  const [todos,settodos]=useState(['Takes dog out for walk','Take the rubbish out','I want to go out today']);
  const [input,setInput]=useState('');
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <input value={input} />
      <button>Add toDo List </button>
      <ul>
        {todos.map
          (todo=>
          (
          <li >{todo}</li>
          ))}
        
      </ul>
    </div>
  );
}

export default App;

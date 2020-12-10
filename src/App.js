import React,{useState} from 'react';
import './App.css';

function App() {
  const [todos,settodos]=useState(['Takes dog out for walk','Take the rubbish out','I want to go out today']);
  const [input,setInput]=useState('');

  const addToDo=(event)=>
  {
    //This will fire on button click
    settodos([...todos,input]);
    setInput('');
  }
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <input value={input} onChange={event=>setInput(event.target.value)}/>
      <button onClick={addToDo}>Add toDo List </button>
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

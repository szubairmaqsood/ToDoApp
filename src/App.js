import React,{useState} from 'react';
import { Button, FormControl,Input,InputLabel } from '@material-ui/core';
import './App.css';

function App() {
  const [todos,settodos]=useState(['Takes dog out for walk','Take the rubbish out','I want to go out today']);
  const [input,setInput]=useState('');

  const addToDo=(event)=>
  {
    //This will fire on button click
    event.preventDefault();   // will stop refresh
    settodos([...todos,input]);  // add data to our to do list
    setInput('');              //set out input filed to empty
  }
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <form>
      
      <FormControl>
      <InputLabel >Write to do:</InputLabel>
      <Input  value={input} onChange={event=>setInput(event.target.value)} />
      </FormControl>
      <Button disabled={!input}  variant="contained" color="primary" type="submit"  onClick={addToDo}>Add toDo</Button>
      </form>
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

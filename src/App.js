import React, { useState,useEffect } from "react";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import ToDo from "./ToDo";
import db from "./firebase";
import firebase from "firebase";
import "./App.css";


function App() {
  const [todos, settodos] = useState([]);
  const [input, setInput] = useState("");
  //when app loads we want to fetch data and alos need to react to data added and removed from database

  useEffect(()=>
  {
    // this code fires when the app loads
    db.collection('ToDOs').onSnapshot(snapshot=>
      {
        settodos(snapshot.docs.map(doc=>({id:doc.id,Task:doc.data().Task})))
      })
  }
  ,[])

  const addToDo = (event) => {
    //This will fire on button click
    event.preventDefault(); // will stop refresh
    db.collection('ToDOs').add(
      {
        Task:input,
        timestamp:firebase.firestore.FieldValue.serverTimestamp()
      }
    )
    //settodos([...todos, input]); // add data to our to do list
    setInput(""); //set out input filed to empty
  };
  return (
    <div className="App">
      <h1>Hello World! This is to do App</h1>
      <form>
        <FormControl>
          <InputLabel>Write to do:</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </FormControl>
        <Button
          disabled={!input}
          variant="contained"
          color="primary"
          type="submit"
          onClick={addToDo}
        >
          Add toDo
        </Button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li>
            <ToDo todo={todo}></ToDo>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

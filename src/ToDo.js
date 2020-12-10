import React, { Component } from "react";
import db from "./firebase";
import { Button} from "@material-ui/core";
import './ToDo.css';

import {
    List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from "@material-ui/core";

function ToDo(props) {
  return (
    <div>
        <List className="todo_list">
      <ListItem>
        <ListItemAvatar>
          <Avatar></Avatar>
        </ListItemAvatar>
        <ListItemText primary="To Do" secondary={props.todo.Task} />
      </ListItem>
      <Button onClick={event=>db.collection('ToDOs').doc(props.todo.id).delete()}>Delete me</Button>
      </List>
    </div>
  );
}

export default ToDo;

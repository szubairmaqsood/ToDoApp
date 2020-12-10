import React, { Component } from "react";
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
        <ListItemText primary="To Do" secondary={props.text} />
      </ListItem>
      </List>
    </div>
  );
}

export default ToDo;

import React from 'react';
import './App.css';

import ToDoHeader from "../ToDoHeader/ToDoHeader";
import ToDoFilter from "../ToDoFilter/ToDoFilter";
import ToDoSearch from "../ToDoSearch/ToDoSearch";
import ToDoList from "../ToDoList/ToDoList";
import ToDoListItem from "../ToDoListItem/ToDoListItem";

export default class App extends React.Component {

  render() {
    return(
        <div>
          <ToDoHeader />
            <ToDoFilter />
            <ToDoSearch />
            <ToDoList />
        </div>
    );
  }

}
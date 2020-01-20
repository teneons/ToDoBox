import React from 'react';
import './App.css';

import ToDoHeader from "../ToDoHeader/ToDoHeader";
import ToDoFilter from "../ToDoFilter/ToDoFilter";
import ToDoSearch from "../ToDoSearch/ToDoSearch";
import ToDoList from "../ToDoList/ToDoList";
import ToDoListItem from "../ToDoListItem/ToDoListItem";

export default class App extends React.Component {



  render() {
      const itemData = [
          {id: 0, itemText: 'Item 0', important: false},
          {id: 1, itemText: 'Item 1', important: true},
          {id: 2, itemText: 'Item 2', important: true},
          {id: 3, itemText: 'Item 3', important: true},
          {id: 4, itemText: 'Item 4', important: false},
      ];


    return(
        <div>
          <ToDoHeader />
            <ToDoFilter />
            <ToDoSearch />
            <ToDoList  itemDt={itemData}/>
        </div>
    );
  }

}
import React from 'react';
import './App.css';

import ToDoHeader from "../ToDoHeader/ToDoHeader";
import ToDoFilter from "../ToDoFilter/ToDoFilter";
import ToDoSearch from "../ToDoSearch/ToDoSearch";
import ToDoList from "../ToDoList/ToDoList";
import ToDoAddItem from "../ToDoAddItem/ToDoAddItem";

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            itemData: [
                {id: 0, itemText: 'Item 0', important: false, done: false},
                {id: 1, itemText: 'Item 1', important: true, done: true},
                {id: 2, itemText: 'Item 2', important: true, done: true},
                {id: 3, itemText: 'Item 3', important: true, done: false},
                {id: 4, itemText: 'Item 4', important: false, done: false},
            ]
        };

    };

    deleteItem = (id) => {
        this.setState(({itemData})=>{
            const getIdEl = itemData.findIndex((idEl)=>idEl.id===id);

            const itemsTo = itemData.slice(0, getIdEl);
            const itemsAfter = itemData.slice(getIdEl +1);
            const newItemData = [...itemsTo, ...itemsAfter];

            return{
                itemData: newItemData
            }
        });
    };

    addItem = (itemText) => {
        const newItemId = this.state.itemData.length+1;

        const newItem = {
            id: newItemId,
            itemText: itemText,
            important: false,
            done: false
        };

        this.setState(({itemData})=>{
            const newAddsArray = [...itemData,newItem]

            return{
                itemData: newAddsArray
            }
        });

    }

  render() {

    return(
        <div className="d-flex flex-column align-items-center">
          <ToDoHeader />
            <ToDoFilter />
            <ToDoSearch />
            <ToDoList  itemDt={this.state.itemData} deletedClick={this.deleteItem}/>
            <ToDoAddItem addItem={this.addItem} />
        </div>
    );
  }

}
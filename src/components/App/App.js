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
                this.createItem('Buy tickets'),
                this.createItem('Call to SA'),
                this.createItem('Refactor. code')
            ]
        };

    };
    createId = 100;

    createItem (itemText) {
        return{
            id: this.createId++,
            itemText,
            itemImportant: false,
            itemDone: false,
            itemDelete: false
        }
    }

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

        const itemNew = this.createItem(itemText);

        this.setState(({itemData})=>{
            const newAddsArray = [...itemData,itemNew]

            return{
                itemData: newAddsArray
            }
        });

    }

    onStageImportant = (id) => {

        console.log('Stage Important', id)
    }

    onStageDone = (id) => {
        this.setState(({itemData})=>{
            const getIdEl = itemData.findIndex((idEl)=>idEl.id===id);

            const oldStageDone = itemData[getIdEl];
            const newStageDone = {...itemData, itemDone: !oldStageDone.itemDone};

            const newItemDataDone = [...itemData.slice(0, getIdEl), newStageDone,...itemData.slice(getIdEl +1)];

            return {
                itemData: newItemDataDone
            };
        })
    }

  render() {



    return(
        <div className="d-flex flex-column align-items-center">
          <ToDoHeader />
          <ToDoFilter />
          <ToDoSearch />
          <ToDoList  itemDt={this.state.itemData} deletedClick={this.deleteItem} onStageImportant={this.onStageImportant} onStageDone={this.onStageDone}/>
          <ToDoAddItem addItem={this.addItem} />
        </div>
    );
  }

}
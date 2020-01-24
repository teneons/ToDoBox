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
    createId = 100; //for create id

    //create item for itemData
    createItem (itemText) {
        return{
            id: this.createId++,
            itemText,
            itemImportant: false,
            itemDone: false,
            itemDelete: false
        }
    }

    //func. for deleted item
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

    //func. for add new item to list (itemData)
    addItem = (itemText) => {

        const itemNew = this.createItem(itemText);

        this.setState(({itemData})=>{
            const newAddsArray = [...itemData,itemNew]

            return{
                itemData: newAddsArray
            }
        });

    }

    //changes state important and done
    mainChangeState (arrayItems, id, nameState) {
        const getIdEl = arrayItems.findIndex((idEl)=> idEl.id === id);

        const oldStage = arrayItems[getIdEl];
        const newStage = {...arrayItems, [nameState]: !oldStage[nameState]};

        return [...arrayItems.slice(0, getIdEl), newStage,...arrayItems.slice(getIdEl +1)];
    }

    onStageImportant = (id) => {
        this.setState(({itemData})=>{
            return{
                itemData: this.mainChangeState(itemData, id, 'important')
            };
        });
    }

    onStageDone = (id) => {
        this.setState(({itemData})=>{
            return{
                itemData: this.mainChangeState(itemData, id, 'done')
            };
        });
    };

  render() {
    const itemDoneCount =  this.state.itemData.filter((el)=>el.itemDone).length;
    const itemCount = this.state.itemData.length - itemDoneCount;

    return(
        <div className="d-flex flex-column align-items-center">
          <ToDoHeader itemDoneCount={itemDoneCount} itemCount={itemCount} />
          <ToDoFilter />
          <ToDoSearch />
          <ToDoList  itemDt={this.state.itemData} deletedClick={this.deleteItem} onStageImportant={this.onStageImportant} onStageDone={this.onStageDone}/>
          <ToDoAddItem addItem={this.addItem} />
        </div>
    );
  }

}
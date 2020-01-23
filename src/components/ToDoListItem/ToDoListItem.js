import React from 'react';
import './ToDoListItem.css';

export default class ToDoListItem extends React.Component {
    /*
    constructor() {
        super();
        this.state = {
            important: false,
            done: false
        };

        this.importantClick = () => {
            this.setState(({important})=>{
                return {important: !important}
            })
        };
        this.doneClick = () => {
            this.setState(({done})=> {
                return { done: !done}
            })
        };
    };
     */


    render() {
        const {itemText, itemImportant, itemDone, deletedClick, onStageImportant, onStageDone} = this.props;

        let  nameClss = 'ToDoListItem';
        if(itemImportant){
            nameClss += ' important';
        }
        if(itemDone){
            nameClss += ' done';
        }

        return(
            <div>
                <span className={nameClss}>
                    <span className='ToDoListItemText'>{itemText}{itemImportant}{itemDone}</span>
                </span>
                <div className='float-right'>
                    <button onClick={onStageImportant} className='btn btn-sm btn-danger mr-1'><i className='fa fa-star'></i></button>
                    <button onClick={onStageDone} className='btn btn-sm btn-secondary mr-1'><i className='fa fa-check-square-o'></i></button>
                    <button onClick={deletedClick} className='btn btn-sm btn-dark mr-1'><i className='fa fa-trash-o'></i></button>
                </div>
            </div>
        )
    }

}
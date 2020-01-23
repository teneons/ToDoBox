import React from 'react';
import './ToDoListItem.css';

export default class ToDoListItem extends React.Component {
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


    render() {
        const {itemText, deletedClick} = this.props;

        let  nameClss = 'ToDoListItem';
        if(this.state.important){
            nameClss += ' important';
        }
        if(this.state.done){
            nameClss += ' done';
        }

        return(
            <div>
                <span className={nameClss}>
                    <span className='ToDoListItemText'>{itemText}{this.state.important}{this.state.done}</span>
                </span>
                <div className='float-right'>
                    <button onClick={this.importantClick} className='btn btn-sm btn-danger mr-1'><i className='fa fa-star'></i></button>
                    <button onClick={this.doneClick} className='btn btn-sm btn-secondary mr-1'><i className='fa fa-check-square-o'></i></button>
                    <button onClick={deletedClick} className='btn btn-sm btn-dark mr-1'><i className='fa fa-trash-o'></i></button>
                </div>
            </div>
        )
    }

}
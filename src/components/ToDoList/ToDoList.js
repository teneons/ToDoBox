import React from 'react';
import ToDoListItem from '../ToDoListItem/ToDoListItem';

export default class ToDoList extends React.Component {

    render() {
        const {itemDt, deletedClick, onStageImportant, onStageDone} = this.props;

        const elemLi = itemDt.map((item) => {
            return(
                <li key={item.id} className='list-group-item p-2'>
                    <ToDoListItem deletedClick={()=>deletedClick(item.id)}
                                  itemText={item.itemText}
                                  itemImportant={item.itemImportant}
                                  itemDone = {item.itemDone}
                                  onStageImportant={()=>onStageImportant(item.id)}
                                  onStageDone={()=>onStageDone(item.id)}
                    />
                </li>
            )
        })

        return(
            <div className='card col-3 p-1 shadow-lg bg-white rounded'>
                <ul className='list-group list-group-flush'>
                    {elemLi}
                </ul>
            </div>
        )
    }

}
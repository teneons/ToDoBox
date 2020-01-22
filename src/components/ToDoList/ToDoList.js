import React from 'react';
import ToDoListItem from '../ToDoListItem/ToDoListItem';

export default class ToDoList extends React.Component {

    render() {
        const {itemDt} = this.props;

        const elemLi = itemDt.map((item) => {
            return(
                <li key={item.id} className='list-group-item p-2'><ToDoListItem itemText={item.itemText} important={item.important} done={item.done}/></li>
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
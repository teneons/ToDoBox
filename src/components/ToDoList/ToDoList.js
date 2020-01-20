import React from 'react';
import ToDoListItem from "../ToDoListItem/ToDoListItem";

export default class ToDoList extends React.Component {

    render() {
        const {itemDt} = this.props;

        const elemsLi = itemDt.map((item) => {
            return(
                <li key={item.id}><ToDoListItem itemText={item.itemText} important={item.important} /></li>
            )
        })

        return(
            <div>
                <ul>
                    {elemsLi}
                </ul>
            </div>
        )
    }

}
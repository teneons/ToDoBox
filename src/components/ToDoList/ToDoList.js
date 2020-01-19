import React from 'react';
import ToDoListItem from "../ToDoListItem/ToDoListItem";

export default class ToDoList extends React.Component {

    render() {
        return(
            <div>
                <ul>
                    <li><ToDoListItem textItem="Item 1" important={false}/></li>
                    <li><ToDoListItem textItem="Item 2" important={true} /></li>
                </ul>
            </div>
        )
    }

}
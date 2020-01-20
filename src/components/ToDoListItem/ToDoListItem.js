import React from 'react';

export default class ToDoListItem extends React.Component {


    render() {
        const {itemText, important } = this.props;


        const style = {
            color: important? 'red' : 'black'
        };

        return(

            <div>
                <span style={style} >{itemText}{important}</span>
            </div>
        )
    }

}
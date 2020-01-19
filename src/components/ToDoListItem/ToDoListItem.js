import React from 'react';

export default class ToDoListItem extends React.Component {


    render() {
        const {textItem, important } = this.props;


        const style = {
            color: important? 'red' : 'black'
        };

        return(

            <div>
                <span style={style} >{textItem}{important}</span>
            </div>
        )
    }

}
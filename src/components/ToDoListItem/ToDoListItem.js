import React from 'react';

export default class ToDoListItem extends React.Component {


    render() {
        const {itemText, important } = this.props;


        const style = {
            color: important? 'red' : 'black'
        };

        return(
            <div>
                <span style={style}>{itemText}{important}</span>
                <div className='float-right'>
                    <button className='btn btn-sm btn-danger mr-1'><i className="fa fa-star"></i></button>
                    <button className='btn btn-sm btn-secondary mr-1'><i className="fa fa-check-square-o"></i></button>
                    <button className='btn btn-sm btn-dark mr-1'><i className="fa fa-trash-o"></i></button>
                </div>
            </div>
        )
    }

}
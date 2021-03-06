import React from 'react';

export default class ToDoHeader extends React.Component {

    render() {
        return(
            <div className='d-flex flex-column align-items-center'>
                <div style={{fontSize: '5em'}}><span style={{fontFamily: 'Segoe Ui Light'}}>ToDo</span><span className='text-warning' style={{fontFamily: 'Segoe UI Black'}}>Box</span></div>
                <div><span>{this.props.itemDoneCount}</span> item of {this.props.itemCount}</div>
            </div>
        );
    }
}
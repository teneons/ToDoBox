import React from 'react';

export default class ToDoAddItem extends  React.Component {

    render() {

        const txtPlaceholder = 'New item text';

        return (
            <div className='col-3 d-flex flex-row mt-2'>
                <input className='form-control' type='text' placeholder={txtPlaceholder} />
                <button onClick={()=>this.props.addItem('Text 42')} className='btn btn-warning ml-1'><i className='fa fa-plus'></i></button>
            </div>
        );
    }
}
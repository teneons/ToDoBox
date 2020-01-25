import React from 'react';

export default class ToDoAddItem extends  React.Component {
    constructor() {
        super();
        this.state = {
            textInput: ''
        };
    };

    onAddChange = (e) => {
        this.setState({textInput: e.target.value})
    };

    submitTextItem = (e) => {
        e.preventDefault();
        this.props.addItem(this.state.textInput);
    };

    render() {
        const txtPlaceholder = 'New item text';

        return (
            <form className='col-3 d-flex flex-row mt-2' onSubmit={this.submitTextItem}>
                <input onChange={this.onAddChange} className='form-control' type='text' placeholder={txtPlaceholder} />
                <button className='btn btn-warning ml-1'><i className='fa fa-plus'></i></button>
            </form>
        );
    }
}
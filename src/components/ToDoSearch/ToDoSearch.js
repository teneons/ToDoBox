import React from 'react';

export default class ToDoSearch extends React.Component {

    render() {

        const txtPlaceholder = 'Search by list';

        return(
            <div className='col-3 mb-2'>
                <input className='form-control col' type='text' placeholder={txtPlaceholder} />
            </div>
        );
    }
}
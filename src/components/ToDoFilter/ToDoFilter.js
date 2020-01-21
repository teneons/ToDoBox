import React from 'react';

export default class ToDoFilter extends React.Component {
    render() {
        return(
            <div>
                <div className='btn-group mb-2' role='group' aria-label='Filter items'>
                    <button type='button' className='btn btn-lg btn-outline-warning border border-warning text-uppercase'>Active</button>
                    <button type='button' className='btn btn-lg btn-outline-secondary border border-warning text-uppercase'>Done</button>
                    <button type='button' className='btn btn-lg btn-outline-dark border border-warning text-uppercase'>Deleted</button>
                </div>
            </div>
        )
    }
}
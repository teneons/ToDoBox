import React from 'react';

export default class ToDoFilter extends React.Component {
    render() {
        return(
            <div>
                <div className="btn-group mb-2" role="group" aria-label="Filter items">
                    <button type="button" className="btn btn-lg btn-outline-warning border border-warning">Active</button>
                    <button type="button" className="btn btn-lg btn-outline-secondary border border-warning">Done</button>
                    <button type="button" className="btn btn-lg btn-outline-dark text-uppercase border border-warning">Deleted</button>
                </div>
            </div>
        )
    }
}
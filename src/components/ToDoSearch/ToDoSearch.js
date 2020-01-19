import React from 'react';

export default class ToDoSearch extends React.Component {

    render() {

        const txtPlaceholder = 'Search by list';

        return(
            <div>
                <input type='text' placeholder={txtPlaceholder} />
            </div>
        );
    }
}
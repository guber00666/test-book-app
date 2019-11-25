import React from 'react';

import './list-item.css';

const ListItem = () => {
    return (
        <div className="list-item">
            <ul className="list-group">
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    Book Name
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    Book Name 2
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    Book Name 3
                </li>
            </ul>
        </div>

    );
};

export default ListItem;
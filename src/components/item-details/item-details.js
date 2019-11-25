import React from 'react';

import './item-details.css'

const ItemDetails = () => {
    return (
        <div className="item-details">
            <div className="list-group">
                <li className="list-group-item list-name">
                    Book Name
                    </li>
                <li className="list-group-item">
                    Book Genre
                     </li>
                <li className="list-group-item">
                    Book Author
                    </li>
                    <li className="list-group-item">
                    Book Annotation Book Annotation Book Annotation
                    Book Annotation Book Annotation Book Annotation
                    Book Annotation
                    </li>
            </div>
        </div>
    );
}

export default ItemDetails;
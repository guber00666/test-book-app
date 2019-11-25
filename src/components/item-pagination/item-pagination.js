import React from 'react';

import './item-pagination.css'

const ItemPagination = () => {
    return (
        <div className="item-pagination">
            <ul class="pagination">
                <li class="page-item disabled">
                    <a class="page-link" href="#">&laquo;</a>
                </li>
                <li class="page-item active">
                    <a class="page-link" href="#">1</a>
                </li>
                <li class="page-item">
                    <a class="page-link" href="#">2</a>
                </li>
            </ul>
        </div>
    );
};

export default ItemPagination;
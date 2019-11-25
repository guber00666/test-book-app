import React from 'react';

import './list-item.css';
import BookService from '../../services/books-service'

const ListItem = () => {


    return (
        <div className="list-item">
            <ul className="nav nav-pills mb-3" role="tablist">
                <li className="nav-item">
                    <a className="nav-link active" >Book Name</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link">Book Genre</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link">Book Author</a>
                </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane active" id="home" role="tabpanel" aria-labelledby="home-tab">
                    <ul class="list-group">
                        <li className="list-group-item">Book 1</li>
                        <li className="list-group-item">Book 2</li>
                        <li className="list-group-item">Book 3</li>
                    </ul>
                </div>

                <div className="tab-pane fade">
                    <ul className="list-group">
                        <li className="list-group-item">Genre 1</li>
                        <li className="list-group-item">Genre 2</li>
                        <li className="list-group-item">Genre 3</li>
                    </ul>
                </div>
                <div className="tab-pane fade">
                    <ul className="list-group">
                        <li className="list-group-item">Author 1</li>
                        <li className="list-group-item">Author 2</li>
                        <li className="list-group-item">Author 3</li>
                    </ul>
                </div>
            </div>
        </div>

    );
};

export default ListItem;
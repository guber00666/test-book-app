import React, { Component } from 'react';

import Header from '../header';
import ItemFilter from '../item-filter';
import ListItem from '../list-item';
import ImportDetails from '../item-details';
import './app.css';
import ItemDetails from '../item-details';


export default class App extends Component {

    render() {

        return (
            <div className="books-app">
                <div className="flex-container d-flex">
                    <div className="col-lg-6">
                        <Header />
                    </div>
                    <div className="col-lg-6">
                        <ItemFilter />
                    </div>
                </div>
                <div className="flex-container d-flex">
                    <div className="col-lg-6">
                        <ListItem />
                    </div>
                    <div className="col-lg-6">
                        <ItemDetails />
                    </div>
                </div>
            </div>
        );
    }


}


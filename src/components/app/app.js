import React, { Component } from 'react';

import Header from '../header';
import ItemFilter from '../item-filter';
import ListItem from '../list-item';

import './app.css';



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
                    <div className="col-lg-12">
                        <ListItem />
                    </div>

                </div>
            </div>
        );
    }


}


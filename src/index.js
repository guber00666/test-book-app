import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { store } from '../src/store/index';

const render = () => {
    ReactDOM.render(
        <App />,
        document.getElementById('root')
    );
};

render();

store.subscribe(render);
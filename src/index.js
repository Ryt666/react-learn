import './index.css';
import App from "./App";
import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import store from './Redux/Store'
import {Provider} from 'react-redux'

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

const rerenderEntireTree = (state) => {
    root.render(
        <BrowserRouter>
            <Provider value={store}>
                <App/>
            </Provider>

        </BrowserRouter>
    );

}

rerenderEntireTree(store.getState())

store.subscribe(rerenderEntireTree)
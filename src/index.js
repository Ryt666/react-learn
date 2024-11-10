import './index.css';
import App from "./App";
import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import store from './Redux/Store'
import StoreContext from './StoreContext';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

const rerenderEntireTree = (state) => {
    root.render(
        <BrowserRouter>
            <StoreContext.Provider value={store}>
                <App/>
            </StoreContext.Provider>

        </BrowserRouter>
    );

}

rerenderEntireTree(store.getState())

store.subscribe(rerenderEntireTree)
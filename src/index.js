import './index.css';
import React from "react";
import ReactDOM from 'react-dom';
import './App.css';
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import store from './Redux/State'

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

const rerenderEntireTree = (state) => {
    root.render(
        <BrowserRouter>
            <App state={state} dispatch={store.dispatch.bind(store)} />
        </BrowserRouter>
    );

}

rerenderEntireTree(store.getState())

store.subscribe(rerenderEntireTree)
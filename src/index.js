import './index.css';
import React from "react";
import { createRoot } from 'react-dom/client';
import './App.css';
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import store from './Redux/State'      
let rerenderEntireTree = (state) => {
    
    const container = document.getElementById('root');
   const root = createRoot(container);
    root.render(
        <BrowserRouter>
            <App state={state} dispatch={store.dispatch.bind(store)}/>
        </BrowserRouter>,document.getElementById('root')
    );

}

rerenderEntireTree(store.getState())

store.subscribe(rerenderEntireTree)
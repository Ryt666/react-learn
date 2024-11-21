import { combineReducers } from 'redux';
import profileReducer from './profileReducer';
import messageReducer from './messageReducer';
import sidebarReducer from './sidebarReducer';
import { configureStore } from '@reduxjs/toolkit';

let reducers = combineReducers({
    profilePage: profileReducer, 
    messagePage: messageReducer,
    sidebar: sidebarReducer  
})
let store = configureStore({
    reducer: reducers
});

window.store = store;

export default store;
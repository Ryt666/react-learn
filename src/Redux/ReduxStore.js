import { combineReducers } from 'redux';
import profileReducer from './profileReducer';
import messageReducer from './messageReducer';
import sidebarReducer from './sidebarReducer';
import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './usersReducer';

let reducers = combineReducers({
    profilePage: profileReducer, 
    messagePage: messageReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer
})
let store = configureStore({ 
    reducer: reducers
}); // the same as createStore()

window.store = store;

export default store;
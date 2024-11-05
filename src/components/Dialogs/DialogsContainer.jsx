import React from "react";
import s from './Dialogs.module.css';
import { NavLink } from "react-router-dom";
import { sendMessageCreator, updateNewMessageCreator } from "../../Redux/messageReducer";
import Dialogs from "./Dialogs";



export default function DialogsContainer(props) {

    let state = props.store.getState().messagePage;


    let onSendMessageClick = () => {

        props.store.dispatch(sendMessageCreator())
    }
    let onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageCreator(body))
    }
    return (
        <Dialogs updateNewMessageCreator={onNewMessageChange} sendMessageCreator={onSendMessageClick} messagePage={state}/>
    )
}
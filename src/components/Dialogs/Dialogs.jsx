import React from "react";
import s from './Dialogs.module.css';
import { NavLink } from "react-router-dom";
import { sendMessageCreator, updateNewMessageCreator } from "../../Redux/State";


const DialogItem = (props) => {

    return (
        <NavLink to={"dialogs/" + props.path} element={Dialogs}>
<div className={s.dialog + ' ' + s.active}> {props.name}</div>
            </NavLink>
    )

}

const MessageItem = (props) => {
return (
    <div className={s.massage}>{props.mes}</div>
)
}


export default function Dialogs(props) {

    let state=props.store.getState().messagePage;

    const dialogsElem = state.dialogsData.map((d) => <DialogItem path={d.id} name={d.name}/>)
    const  mesElem =state.mesData.map(m => <MessageItem mes={m.mes}/>)
    const newMessageText =state.newMessageText

  let onSendMessageClick = () => {
     props.store.dispatch(sendMessageCreator())
  }
  let onNewMessageChange= (e) => {
let body = e.target.value
props.store.dispatch(updateNewMessageCreator(body))  
}
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
        {dialogsElem}
            </div>
            <div className={s.dialog_massages}>
              <div>{mesElem}</div> 
              <div>
              <div><textarea value={newMessageText} onChange={onNewMessageChange} placeholder="Enter your message"></textarea></div>
              <div><button onClick={onSendMessageClick}>Send</button></div>
              </div>
            </div>
        </div>
    )
}
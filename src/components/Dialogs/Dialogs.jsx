import React from "react";
import s from './Dialogs.module.css';
import { NavLink } from "react-router-dom";


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

 const dialogsElem = props.state.dialogsData.map((d) => <DialogItem path={d.id} name={d.name}/>)
  const  mesElem = props.state.mesData.map(m => <MessageItem mes={m.mes}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
        {dialogsElem}
            </div>

            <div className={s.dialog_massages}>
                {mesElem}
            </div>
        </div>
    )
}
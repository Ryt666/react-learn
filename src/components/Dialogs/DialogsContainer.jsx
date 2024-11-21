import React from "react";
import { sendMessageCreator, updateNewMessageCreator } from "../../Redux/messageReducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

// export default function DialogsContainer(props) {
//     return (
//         <StoreContext.Consumer>
//             {(store) => {
//                 let onSendMessageClick = () => {
//                     store.dispatch(sendMessageCreator())
//                 }
//                 let onNewMessageChange = (body) => {
//                     store.dispatch(updateNewMessageCreator(body))
//                 }
//                 return <Dialogs updateNewMessageCreator={onNewMessageChange} sendMessageCreator={onSendMessageClick} messagePage={store.getState().messagePage} />
//             }
//             }
//         </StoreContext.Consumer>
//     )
// }


let mapStateToProps = (state) => {
    return {
        messagePage: state.messagePage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {

        updateNewMessage: (body) => {
            dispatch(updateNewMessageCreator(body))
        },
        sendMessage: () => {
            dispatch(sendMessageCreator())

        }
    }
}
const dialogContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
export default dialogContainer
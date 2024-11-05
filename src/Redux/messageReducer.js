const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    mesData: [
        { id: 1, mes: "hi" },
        { id: 2, mes: "how are you?" },
        { id: 3, mes: "ok" }
    ],
    newMessageText: '',
    dialogsData: [
        { id: 1, name: "Dima" },
        { id: 2, name: "Andrew" },
        { id: 3, name: "Sveta" },
        { id: 4, name: "Sasha" },
        { id: 5, name: "Masha" },
        { id: 6, name: "Kirill" }
    ]
}
export default function messageReducer(state =initialState, action) {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageText;
            state.newMessageText = '';
            state.mesData.push({ id: 6, mes: body });
            return state;
        default:
            return state;
    }
}


export const sendMessageCreator = () => ({ type: SEND_MESSAGE })

export const updateNewMessageCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    body: body
})
const ADD_POST = "ADD-POST"
const UPDATE_POST_TEXT = "UPDATE-NEW-POST-TEXT"

const UPDATE_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"
const SEND_MESSAGE = "SEND-MESSAGE"
let store = {
    _state: {
        profilePage: {
            postData: [
                { id: 1, message: 'hi', likeCount: '9' },
                { id: 2, message: 'how are you?', likeCount: '99' }

            ],
            newPostText: 'IT'
        },
        messagePage: {
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
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('it was changed')
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
     
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })

export const updateNewPostText = (text) => ({
    type: UPDATE_POST_TEXT,
    newText: text
})

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })

export const updateNewMessageCreator = (body) => ({
    type: UPDATE_MESSAGE_TEXT,
    body: body
})

export default store;
window.store = store;

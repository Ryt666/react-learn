import messageReducer from "./messageReducer"
import profileReducer from "./profileReducer"
import sidebarReducer from "./sidebarReducer"

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
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagePage = messageReducer(this._state.messagePage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);

    }
}

export default store;
window.store = store;

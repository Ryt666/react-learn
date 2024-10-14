let ADD_POST = "ADD-POST"
let UPDATE_TEXT = "UPDATE-NEW-POST-TEXT"

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
        if (action.type === ADD_POST) {
            let newPost = {
                id: 0,
                message: this._state.profilePage.newPostText,
                likeCount: 0
            }
            this._state.profilePage.postData.push(newPost)
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_TEXT) {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        }
    }

}

export const addPostActionCreator = () => ({ type: ADD_POST })

export const updateNewPostText = (text) => ({
    type: UPDATE_TEXT,
    newText: text
})

export default store;
window.store = store;

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

        }
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        debugger;
        console.log('it was changed')
    },
    _subscribe(observer) {

        this._callSubscriber = observer;

    },
    dispatch(action) {
        if (action.type === "ADD POST") {
            let newPost = {
                id: 0,
                message: this._state.profilePage.newPostText,
                likeCount: 0
            }
            this._state.profilePage.postData.push(newPost)
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state)
        } else if (action.type === "UPDATE-NEW-POST-TEXT") {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        }
    }

}
export default store;
window.store = store;

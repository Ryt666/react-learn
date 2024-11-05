const ADD_POST = "ADD-POST"
const UPDATE_POST_TEXT = "UPDATE-NEW-POST-TEXT"

let initialState = {
    postData: [
        { id: 1, message: 'hi', likeCount: '9' },
        { id: 2, message: 'how are you?', likeCount: '99' }

    ],
    newPostText: 'IT'
}
export default function profileReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 0,
                message: state.newPostText,
                likeCount: 0
            }
            state.postData.push(newPost)
            state.newPostText = '';
            return state;
        case UPDATE_POST_TEXT:
            state.newPostText = action.newText;
            return state;
            default:
                return state;
    }
    
}

export const addPostActionCreator = () => ({ type: ADD_POST })

export const updateNewPostText = (text) => ({
    type: UPDATE_POST_TEXT,
    newText: text
})
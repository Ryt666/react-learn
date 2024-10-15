const ADD_POST = "ADD-POST"
const UPDATE_POST_TEXT = "UPDATE-NEW-POST-TEXT"

const profileReducer=(state, action) =>{
    if (action.type === ADD_POST) {
        let newPost = {
            id: 0,
            message: this._state.profilePage.newPostText,
            likeCount: 0
        }
        state.postData.push(newPost)
        state.profilePage.newPostText = '';
    } else if (action.type === UPDATE_POST_TEXT) {
        state.profilePage.newPostText = action.newText

    } 
    

    return state;
}
import React from 'react';
import { addPostActionCreator, updateNewPostText } from '../../../Redux/profileReducer';
import MyPosts from './MyPosts';
import StoreContext from '../../../StoreContext';

const MyPostsContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState();
        let addPost = () => {
          store.dispatch(addPostActionCreator())
        }

        let onPostChange = (text) => {
          store.dispatch(updateNewPostText(text))
        }
        return <MyPosts addPost={addPost} updateNewPostText={onPostChange} postData={state.profilePage.postData} newPostText={state.profilePage.newPostText} />
      }
      }
    </StoreContext.Consumer>
  )
}

export default MyPostsContainer;
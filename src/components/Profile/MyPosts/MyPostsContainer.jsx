import React from 'react';
import { addPostActionCreator, updateNewPostText } from '../../../Redux/profileReducer';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {

  let state = props.store.getState();

let addPost  = () => {
  props.store.dispatch(addPostActionCreator())
}

let onPostChange = (text) => {
  props.store.dispatch(updateNewPostText(text))
}
  return (
    <MyPosts addPost={addPost} updateNewPostText={onPostChange} postData={state.profilePage.postData} newPostText={state.profilePage.newPostText}/>
  )

}

export default MyPostsContainer;
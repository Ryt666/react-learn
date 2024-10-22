import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { addPostActionCreator, updateNewPostText } from '../../../Redux/profileReducer';

const MyPosts = (props) => {

  let postElem = props.postData.map((m) =><Post message={m.message} likeCount={m.likeCount} />)

let newPostElem = React.createRef()

let addPost  = () => {
  props.dispatch(addPostActionCreator())
}

let onPostChange = () => {
  let text = newPostElem.current.value
  props.dispatch(updateNewPostText(text))
}
  return (
    <div className={s.postBlock}>
     <h3>My posts</h3> 
      <div>
        <div>
        <textarea onChange={onPostChange} ref= {newPostElem} value={props.newPostText} />
        </div>
        
        <button onClick={addPost}>Add post</button>

      </div>
      <div className={s.posts}>
     {postElem}
      </div>
    </div>
  )

}

export default MyPosts;
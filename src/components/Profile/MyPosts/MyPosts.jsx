import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  
  let postElem = props.postData.map((m) =><Post message={m.message} likeCount={m.likeCount} />)

let newPostElem = React.createRef()

let addPost  = () => {
  props.dispatch({type : 'ADD-POST'})
}

let onPostChange = () => {
  let text = newPostElem.current.value
  let action = {type :'UPDATE-NEW-POST-TEXT', newText :text}
  props.dispatch(action)
}
  return (
    <div className={s.postBlock}>
     <h3>My posts</h3> 
      <div>
        <div>
        <textarea onChange={onPostChange} ref= {newPostElem} value={props.newPostText} ></textarea>
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
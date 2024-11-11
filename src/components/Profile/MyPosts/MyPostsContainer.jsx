import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../Redux/profileReducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

// const MyPostsContainer = (props) => {
//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         let state = store.getState();
//         let addPost = () => {
//           store.dispatch(addPostActionCreator())
//         }

//         let onPostChange = (text) => {
//           store.dispatch(updateNewPostTextActionCreator(text))
//         }
//         return <MyPosts addPost={addPost} updateNewPostText={onPostChange} postData={state.profilePage.postData} newPostText={state.profilePage.newPostText} />
//       }
//       }
//     </StoreContext.Consumer>
//   )
// }

let mapStateToProps = (state) => {
  return {
    postData: state.profilePage.postData,
    newPostText: state.profilePage.newPostText

  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator())
    },
    onPostChange: (text) => {
      let action = updateNewPostTextActionCreator(text);
      dispatch(updateNewPostTextActionCreator(action))
    }
  }

}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer;
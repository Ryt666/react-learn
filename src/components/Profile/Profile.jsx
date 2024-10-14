import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const ProfileInfo = () => {
  return(
    <div>
      <div>
        <img src='https://portscaner.ru/Files/Wallpaper/Medium/5fc4f836b358f.jpg' alt='img'/>
      </div>
      <div className={s.descriptionBlock}>
        ava + description
      </div>

    </div>
  )
}



const Profile = (props) => {
  return (
<>
<ProfileInfo />
<MyPosts postData={props.profilePage.postData} 
newPostText={props.profilePage.newPostText}
dispatch={props.dispatch}/>
</>


  )
}

export default Profile;
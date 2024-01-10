import React from "react";
import "./profile.css";
import { useState,useRef } from "react";
import Posts from "./posts/posts";
import Followers from "./followers/followers";
import Following from './following/following'
function Profile() {
  const [content,setContent] = useState('Post')


  const postRef = useRef(null);
	return (
		<div className="mail-div">
			<p>Profile</p>
			<div className="profile-info-container">
				<div className="image-placeholder"></div>
				<div className="Profile-info">
					<div style={{width:'100%'}}>
						<h2 style={{marginLeft:"2rem"}}>Shadab Khan</h2>
						<div className="number-info">
              <p>Posts:511</p>
              <p>Followers:511</p>
              <p>Following:511</p>
            </div>
					</div>
				</div>
			</div>
      <div className="container-2">
      <div className="actions">
        <p onClick={() => {setContent('Post')}} >Posts</p>
        <p onClick={() => {setContent('Followers')}} >Followers</p>
        <p onClick={() => {setContent('Following')}} >Following</p>
      </div>
      {content === "Post" && <Posts />}
      {content === "Followers" && <Followers />}
      {content === "Following" && <Following />}
      </div>
		</div>
	);
}

export default Profile;

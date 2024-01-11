import React from "react";
import "./profile.css";
import { useState } from "react";
import Posts from "./posts/posts";
import Followers from "./followers/followers";
import Following from "./following/following";
import { useSelector } from "react-redux";
function Profile() {
	const [content, setContent] = useState("Post");

	const followingData = useSelector((state) => state.following.people);
	const tweetData = useSelector((state) => state.tweets.personalTweet);

	return (
		<div className="main-div">
			<p>Profile</p>
			<div className="profile-info-container">
				<div className="image-placeholder"></div>
				<div className="Profile-info">
					<div style={{ width: "100%" }}>
						<h2>Shadab Khan</h2>
						<div className="number-info">
							<p>Posts: {tweetData}</p>
							<p>Followers: 4</p>
							<p>Following: {followingData.length}</p>
						</div>
					</div>
				</div>
			</div>
			<div className="container-2">
				<div className="actions">
					<p
						onClick={() => {
							setContent("Post");
						}}
					>
						Posts
					</p>
					<p
						onClick={() => {
							setContent("Followers");
						}}
					>
						Followers
					</p>
					<p
						onClick={() => {
							setContent("Following");
						}}
					>
						Following
					</p>
				</div>
				{content === "Post" && <Posts />}
				{content === "Followers" && <Followers />}
				{content === "Following" && <Following />}
			</div>
		</div>
	);
}

export default Profile;

import React from "react";
import "./profile.css";
import { useState, useRef } from "react";
import Posts from "./posts/posts";
import Followers from "./followers/followers";
import Following from "./following/following";
import { useSelector, useDispatch } from "react-redux";
import { updatePic } from "../../features/following/followingSlice";
function Profile() {
	const [content, setContent] = useState("Post");
	const postRef = useRef(null);
	const followersRef = useRef(null);
	const followingRef = useRef(null);

	const personalInfo = useSelector((state) => state.following.ourself);

	const dispatch = useDispatch();

	const followingData = useSelector((state) => state.following.people);
	const tweetData = useSelector((state) => state.tweets.personalTweet);

	const handleProfilePhotoUpdate = () => {
		let input = document.createElement("input");
		input.setAttribute("type", "file");
		input.setAttribute("accept", ".png,.jpeg,.jpg");
		input.click();
		input.addEventListener("change", (e) => {
			let image = input.files[0];
			let url = URL.createObjectURL(image);
			dispatch(updatePic(url));
		});
	};
	const handleProfilePhotoReset = () => {
		dispatch(updatePic(`${process.env.PUBLIC_URL}/images/default-person.png`));
	};

	return (
		<div className="main-div">
			<div className="profile-info-container">
				<div className="profile-image-div">
					<div className="image-placeholder">
						<img src={personalInfo.img} alt="profile-img" />
					</div>
					<div className="profilePic-btn-div">
						<button onClick={handleProfilePhotoReset}>Reset</button>
						<button onClick={handleProfilePhotoUpdate}>Update</button>
					</div>
				</div>
				<div className="Profile-info">
					<div style={{ width: "100%" }}>
						<h2>{personalInfo.name}</h2>
						<div className="number-info">
							<p>Posts: {tweetData.length}</p>
							<p>Followers: {personalInfo.followers}</p>
							<p>Following: {followingData.length}</p>
						</div>
					</div>
				</div>
			</div>
			<div className="container-2">
				<div className="actions">
					<p
						className="underline"
						ref={postRef}
						onClick={() => {
							setContent("Post");
							postRef.current.classList.add("underline");
							followersRef.current.classList.remove("underline");
							followingRef.current.classList.remove("underline");
						}}
					>
						Posts
					</p>
					<p
						ref={followersRef}
						onClick={() => {
							setContent("Followers");
							postRef.current.classList.remove("underline");
							followersRef.current.classList.add("underline");
							followingRef.current.classList.remove("underline");
						}}
					>
						Followers
					</p>
					<p
						ref={followingRef}
						onClick={() => {
							setContent("Following");
							postRef.current.classList.remove("underline");
							followersRef.current.classList.remove("underline");
							followingRef.current.classList.add("underline");
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

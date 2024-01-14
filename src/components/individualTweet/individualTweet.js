import React from "react";
import "./individualTweet.css";
import PersonImage from "../personalImage/personImage";
import { useSelector,useDispatch } from "react-redux";
import { deleteTweet } from "../../features/tweets/tweetSlice";
import { unfollow } from "../../features/following/followingSlice";

function IndividualTweet({ name, time, content, img, uniqueTweetKey }) {
	const personalInfo = useSelector(state => state.following.ourself)

	const dispatch = useDispatch();

	const handleClick = () => {
		if(name === personalInfo.name){
			dispatch(deleteTweet(uniqueTweetKey));
		}
		else{
			dispatch(unfollow(name))

		}
	}

	return (
		<div className="tweet-container">
			<PersonImage image={img} />
			<div className="tweet-content">
				<div className="tweet-head">
					<h3>{name}</h3>
					<button className="delete-btn" onClick={handleClick}>
					{name === personalInfo.name?"Delete":"Unfollow"}
					</button>
				</div>
				<div className="tweet-para">{content} </div>
				<p className="time-para">{time}</p>
			</div>
		</div>
	);
}

export default IndividualTweet;

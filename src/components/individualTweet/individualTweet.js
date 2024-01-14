import React from "react";
import "./individualTweet.css";
import PersonImage from "../personalImage/personImage";
import { useSelector } from "react-redux";

function IndividualTweet({ key,name, time, content, img }) {
	const personalInfo = useSelector(state => state.following.ourself)

	const handleClick = () => {
	}

	return (
		<div className="tweet-container">
			<PersonImage image={img} />
			<div className="tweet-content">
				<div className="tweet-head">
					<h3>{name}</h3>
					{/* <button className="delete-btn" onClick={handleClick}>
					{name === personalInfo.name?"Delete":"Unfollow"}
					</button> */}
				</div>
				<div className="tweet-para">{content} </div>
				<p className="time-para">{time}</p>
			</div>
		</div>
	);
}

export default IndividualTweet;

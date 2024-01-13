import React from "react";
import "./individualTweet.css";
import PersonImage from "../personalImage/personImage";

function IndividualTweet({ name, time, content, img }) {
	return (
		<div className="tweet-container">
			<PersonImage image={img} />
			<div className="tweet-content">
				<div className="tweet-head">
					<h3>{name}</h3>
					<p>{time}</p>
				</div>
				<div className="tweet-para">{content} </div>
			</div>
		</div>
	);
}

export default IndividualTweet;

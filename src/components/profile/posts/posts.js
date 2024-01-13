import React from "react";
import IndividualTweet from "../../individualTweet/individualTweet";
import WriteTweet from "../../writeTweet/writeTweet";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { nanoid } from "@reduxjs/toolkit";

function Posts() {
	const [tweets, setTweets] = useState([]);
	const personalTweets = useSelector((state) => state.tweets.personalTweet);
	const personalInfo = useSelector((state) => state.following.ourself )
 
	useEffect(() => {
		setTweets(personalTweets);
	}, [personalTweets]);

	return (
		<div style={{ padding: "0.5rem" }}>
			<WriteTweet />
			{tweets.map((tweet) => (
				<IndividualTweet
					key={nanoid()}
					name={tweet.name}
					time={tweet.time}
					content={tweet.content}
					img={personalInfo.img}
				/>
			))}
		</div>
	);
}

export default Posts;

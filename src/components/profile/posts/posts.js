import React from "react";
import IndividualTweet from "../../feed/individualTweet/individualTweet";
import WriteTweet from "../../writeTweet/writeTweet";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

function Posts() {
	const [tweets, setTweets] = useState([]);
	const personalTweets = useSelector((state) => state.tweets.personalTweet);

	useEffect(() => {
		setTweets(personalTweets);
	}, [personalTweets]);

	return (
		<div style={{ padding: "0.5rem" }}>
			<WriteTweet />
			{tweets &&
				tweets.map((tweet, index) => (
					<IndividualTweet
						key={index}
						name={tweet.name}
						time={tweet.time}
						content={tweet.content}
					/>
				))}

			{/* <IndividualTweet />
      <IndividualTweet />
      <IndividualTweet /> */}
		</div>
	);
}

export default Posts;

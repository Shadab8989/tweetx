import React from "react";
import IndividualTweet from "../../feed/individualTweet/individualTweet";
import WriteTweet from "../../writeTweet/writeTweet";
import { useSelector } from "react-redux";

function Posts() {
	const data = useSelector((state) => state.tweets.tweetArray);
	const personalTweets = data.filter((tweet) => tweet.name === "Shadab Khan");

	return (
		<div style={{ padding: "0.5rem" }}>
			<WriteTweet />
			{personalTweets.map((tweet, index) => (
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

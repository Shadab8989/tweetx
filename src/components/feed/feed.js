import React from "react";
import "./feed.css";
import IndividualTweet from "./individualTweet/individualTweet";
import { useSelector } from "react-redux";
import WriteTweet from "../writeTweet/writeTweet";

function Feed() {
  
  const peopleFollowed = useSelector((state) => state.following.people);
	const peopleName = peopleFollowed.map((people) => people.name);
	const peopleTweets = useSelector((state) => state.tweets.tweetArray);
  
	const followedPeopleTweets = peopleTweets.filter((tweet) =>
  peopleName.includes(tweet.name)
	);
  
	return (
    <>
			<div className="main-container">
      <WriteTweet />	
				<div className="feed-container">
					{followedPeopleTweets.map((tweet) => (
						<IndividualTweet
							key={tweet.name}
							name={tweet.name}
							time={tweet.time}
							content={tweet.content}
						/>
					))}
				</div>
			</div>
		</>
	);
}

export default Feed;

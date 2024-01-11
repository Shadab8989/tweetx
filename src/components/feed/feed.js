import React from "react";
import "./feed.css";
import IndividualTweet from "./individualTweet/individualTweet";
import { useSelector } from "react-redux";
import WriteTweet from "../writeTweet/writeTweet";

function Feed() {
	const peopleFollowed = useSelector((state) => state.following.people);
	const peopleName = peopleFollowed.map((people) => people.name);
	const peopleTweets = useSelector((state) => state.tweets.tweetArray);

	let followedPeopleTweets = peopleTweets.filter((tweet) =>
		peopleName.includes(tweet.name)
	);
	const sortFunction = (obj1,obj2) => {
		let t1, t2;
		if (obj1.time[1] !== " ") {
			t1 = obj1.time.slice(0, 2);
		} else {
			t1 = obj1.time.slice(0, 1);
		}
		if (obj2.time[1] !== " ") {
			t2 = obj2.time.slice(0, 2);
		} else {
			t2 = obj2.time.slice(0, 1);
		}
		return Number(t1) - Number(t2)

	}
	followedPeopleTweets.sort((a,b) => sortFunction(a,b))

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

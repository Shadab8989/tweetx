import React from "react";
import "./feed.css";
import IndividualTweet from "../individualTweet/individualTweet";
import { useSelector } from "react-redux";
import WriteTweet from "../writeTweet/writeTweet";
import { useState, useEffect } from "react";
import { nanoid } from "@reduxjs/toolkit";

function Feed() {
	const [displayOrder, setDisplayOrder] = useState([]);

	const peopleFollowed = useSelector((state) => state.following.people);
	const personalTweets = useSelector((state) => state.tweets.personalTweet);
	const names = peopleFollowed.map((people) => people.name);
	const peopleTweets = useSelector((state) => state.tweets.tweetArray);
	const personalInfo = useSelector((state) => state.following.ourself);

	useEffect(() => {
		let peopleTweetsSort = peopleTweets.filter((tweet) =>
			names.includes(tweet.name)
		);
		const sortFunction = (obj1, obj2) => {
			let t1, t2;
			obj1.time[1] !== " "
				? (t1 = obj1.time.slice(0, 2))
				: (t1 = obj1.time.slice(0, 1));
			obj2.time[1] !== " "
				? (t2 = obj2.time.slice(0, 2))
				: (t2 = obj2.time.slice(0, 1));

			return Number(t1) - Number(t2);
		};
		peopleTweetsSort.sort((a, b) => sortFunction(a, b));
		setDisplayOrder(personalTweets.concat(peopleTweetsSort));
	}, [peopleFollowed, personalTweets]);

	return (
		<>
			<div className="main-container">
				<WriteTweet />
				<div className="feed-container">
					{displayOrder.map((tweet) => (
						<IndividualTweet
							key={nanoid()}
							name={tweet.name}
							time={tweet.time}
							content={tweet.content}
							img={tweet.name !== personalInfo.name?tweet.img:personalInfo.img}
							uniqueTweetKey = {tweet.tweetKey}
						/>
					))}
				</div>
			</div>
		</>
	);
}

export default Feed;

import React from "react";
import "./individual.css";
import { useState } from "react";
import PersonImage from "../../personImage";
import { useDispatch } from "react-redux";
import { follow,unfollow } from "../../../features/following/followingSlice";

function Individual({ name, followers, status }) {
	const [followState, setFollowState] = useState(status);

	const personObj = {
		name: name,
		followers: followers,
	};

  const dispatch = useDispatch();

	const handleClick = () => {
		if (followState === "Follow") {
			setFollowState("Following");
      dispatch(follow(personObj))

		} else {
			setFollowState("Follow");
      dispatch(unfollow(personObj))
		}
	};
	return (
		<div className="container">
			<PersonImage />
			<div className="person-info">
				<h4>{name}</h4>
				<p>Followers:{followers}</p>
			</div>
			<button className="follow-btn" onClick={handleClick}>
				{followState}
			</button>
		</div>
	);
}

export default Individual;

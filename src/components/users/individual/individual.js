import React from "react";
import "./individual.css";
import { useState } from "react";
import PersonImage from "../../personalImage/personImage";
import { useDispatch } from "react-redux";
import { follow, unfollow } from "../../../features/following/followingSlice";
import { useEffect, useRef } from "react";

function Individual({ name, followers, status,image }) {
	const [followState, setFollowState] = useState(status);
	const followBtnRef = useRef(null);

	const personObj = {
		name: name,
		followers: followers,
	};

	useEffect(() => {
		//using useeffect, as only after the component is rendered, ref would be created.
		if (followState === "Following") {
			followBtnRef.current.classList.add("following");
		} else {
			followBtnRef.current.classList.remove("following");
		}
	}, [followState]);

	const dispatch = useDispatch();

	const handleClick = () => {
		if (followState === "Follow") {
			setFollowState("Following");
			dispatch(follow(personObj));
		} else {
			setFollowState("Follow");
			dispatch(unfollow(personObj));
		}
	};
	return (
		<div className="container">
			<PersonImage />
			<div className="person-info">
				<h5>{name}</h5>
				<p style={{fontSize:'0.9rem'}} >Followers: {followers}</p>
			</div>
			<button className="follow-btn" ref={followBtnRef} onClick={handleClick}>
				{followState}
			</button>
		</div>
	);
}

export default Individual;

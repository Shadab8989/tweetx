import React from "react";
import Individual from "../../users/individual/individual";
import { useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

function Followers() {
	const data = useSelector((state) => state.following.people);

	const usersArray = [
		{ name: "Person 1", followers: 2000 },
		{ name: "Person 2", followers: 750 },
		{ name: "Person 3", followers: 230 },
		{ name: "Person 4", followers: 580 },
	];

	const updatedState = (user) => {
		let persent = data.filter((person) => person.name === user.name);
		if (persent.length) return "Following";
		else return "Follow";
	};

	return (
		<div>
			{usersArray.map((person) => {
				return (
					<>
						<Individual
							key={nanoid()}
							name={person.name}
							followers={person.followers}
							status={updatedState(person)}
						/>
						<hr />
					</>
				);
			})}
		</div>
	);
}

export default Followers;

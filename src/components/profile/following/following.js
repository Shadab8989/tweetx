import React from "react";
import Individual from "../../users/individual/individual";
import { useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

function Following() {
	const followingPeople = useSelector((state) => state.following.people);
	return (
		<div>
			{followingPeople.map((person) => {
				return (
					<>
						<Individual
							key={nanoid()}
							name={person.name}
							followers={person.followers}
							status={"Following"}
						/>
						<hr />
					</>
				);
			})}
		</div>
	);
}

export default Following;

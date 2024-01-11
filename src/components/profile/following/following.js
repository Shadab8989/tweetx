import React from "react";
import Individual from "../../users/individual/individual";
import { useSelector } from "react-redux";

function Following() {
	const followingPeople = useSelector((state) => state.following.people);
	const others = followingPeople.slice(1); //everyone expect ourself
	return (
		<div>
			{others.map((person) => {
				return <>
				<Individual
					key={person.name}
					name={person.name}
					followers={person.followers}
					status={"Following"}
				/>
				<hr />
				</>
			}
				
			)}
			{/* <Individual name="Person 4" followers={243} status={"Follow"} />
			<Individual name="Person 5" followers={729} status={"Follow"} />
			<Individual name="Person 6" followers={898} status={"Follow"} /> */}
		</div>
	);
}

export default Following;

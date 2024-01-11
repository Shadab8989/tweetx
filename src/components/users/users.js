import React from "react";
import "./users.css";
import Individual from "./individual/individual";
import { useSelector } from "react-redux";

function Users() {
  const data = useSelector(state => state.following.people)

	const usersArray = [
		{ name: "Person 1", followers: 2000 },
		{ name: "Person 2", followers: 750 },
		{ name: "Person 3", followers: 230 },
		{ name: "Person 4", followers: 580 },
	];

  const updatedState = (user) => {

    let persent = data.filter((person) => person.name === user.name)
    if(persent.length) return "Following"
    else return "Follow"
  }

	return (
		<>
			<div className="users-container">
				{usersArray.map((user) => {
					return (
						<>
							<Individual
								key={user.name}
								name={user.name}
								followers={user.followers}
								status={updatedState(user)}
							/>
							<hr></hr>
						</>
					);
				})}
			</div>
		</>
	);
}

export default Users;

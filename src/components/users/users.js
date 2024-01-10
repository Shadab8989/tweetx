import React from "react";
import "./users.css";
import Individual from "./individual/individual";

function Users() {
	const usersArray = [{ name: "Person 1", followers: 2000 },
  { name: "Person 2", followers: 750 },
  { name: "Person 3", followers: 230 },
  { name: "Person 4", followers: 580 }];

	return (
		<>
			<div className="users-container">
				{usersArray.map(user => {
          return (<>
            <Individual name={user.name} followers={user.followers} status={"Follow"}/>
            <hr></hr>
          </>)
        })}
			</div>
		</>
	);
}

export default Users;

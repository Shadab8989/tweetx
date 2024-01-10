import React from "react";
import Individual from "../../users/individual/individual";

function Following() {
	return (
		<div>
			<Individual name="Person 4" followers={243} status={"Follow"} />
			<Individual name="Person 5" followers={729} status={"Follow"} />
			<Individual name="Person 6" followers={898} status={"Follow"} />
		</div>
	);
}

export default Following;

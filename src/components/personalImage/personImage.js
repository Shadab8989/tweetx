import React from "react";
import "./personImage.css";

function PersonImage({image}) {
	return (
		<div className="personImage-container">
			<img
				src={image || `${process.env.PUBLIC_URL}/images/default-person.png`}
				alt="person"
			/>
		</div>
	);
}

export default PersonImage;

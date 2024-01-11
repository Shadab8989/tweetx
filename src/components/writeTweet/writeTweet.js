import React from "react";
import "./writeTweet.css";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addTweet } from "../../features/tweets/tweetSlice";
function WriteTweet() {
	const [input, setInput] = useState("");
	const divRef = useRef(null);

	const dispatch = useDispatch();

	const handleWriteClick = (event) => {
		divRef.current.classList.add("display-block");
	};

	const handleDiscardClick = (event) => {
		divRef.current.classList.remove("display-block");
		setInput("");
	};
	const handlePost = () => {
		if (input) {
			const tweetObj = {
				name: "Shadab Khan",
				content: input,
				time: "0 mins ago",
			};
			setInput("");
			divRef.current.classList.remove("display-block");
			dispatch(addTweet(tweetObj));
		}
	};
	return (
		<div>
			<button className="write-btn" onClick={handleWriteClick}>
				Write
			</button>
			<div ref={divRef} className="feed-post-container">
				<input
					className="feed-input"
					value={input}
					onChange={(e) => setInput(e.target.value)}
				></input>
				<div className="button-div">
					<button style={{ margin: "0.5rem" }} onClick={handleDiscardClick}>
						Discard
					</button>
					<button onClick={handlePost}>Post</button>
				</div>
			</div>
		</div>
	);
}

export default WriteTweet;

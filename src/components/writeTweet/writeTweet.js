import React from "react";
import "./writeTweet.css";
import { useRef, useState,useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTweet } from "../../features/tweets/tweetSlice";
import { nanoid } from "@reduxjs/toolkit";

function WriteTweet() {
	const [input, setInput] = useState("");
	const divRef = useRef(null);
	const postRef = useRef(null);

	const personalInfo = useSelector(state => state.following.ourself);

	const dispatch = useDispatch();

	useEffect(()=>{
		if(!input){
			postRef.current.classList.add('disabled')
		}
		else{
			postRef.current.classList.remove('disabled')
		}

	},[input])

	const handleWriteClick = () => {
		divRef.current.classList.add("display-block");
	};

	const handleDiscardClick = () => {
		divRef.current.classList.remove("display-block");
		setInput("");
	};
	const handlePost = () => {
		if (input) {
			const tweetObj = {
				name: "Shadab Khan",
				content: input,
				time: "0 mins ago",
				img:personalInfo.img,
				tweetKey: nanoid(),
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
				<textarea
					className="feed-input"
					value={input}
					onChange={(e) => setInput(e.target.value)}
				></textarea>
				<div className="button-div">
					<button className="discard-btn" style={{ margin: "0.5rem" }} onClick={handleDiscardClick}>
						Discard
					</button>
					<button ref={postRef} className="post-btn disabled" onClick={handlePost} disabled={input === ""}>Post</button>
				</div>
			</div>
		</div>
	);
}

export default WriteTweet;

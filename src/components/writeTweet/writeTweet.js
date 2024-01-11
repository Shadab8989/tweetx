import React from 'react'
import { useRef } from "react";

function WriteTweet() {
    const divRef = useRef(null);
	const handleWriteClick = (event) => {
		divRef.current.classList.add("display");
	};

    const handleDiscardClick = (event) => {
        divRef.current.classList.remove('display')
    }
  return (
    <div>
      <button className="write-btn" onClick={handleWriteClick}>
					Write
				</button>
				<div ref={divRef} className="feed-post-container">
					<input className="feed-input" type='textArea'></input>
					<button style={{margin:"0.5rem"}} onClick={handleDiscardClick}>Discard</button>
					<button>Post</button>
				</div>
    </div>
  )
}

export default WriteTweet

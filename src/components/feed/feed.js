import React from 'react'
import "./feed.css"
import IndividualTweet from './individualTweet/individualTweet'
import { useRef } from 'react'

function Feed() {
  const divRef = useRef(null);
  const handleWriteClick = (event) => {
    divRef.current.classList.add('display')
  } 

  return (
    <><div className='main-container'>
      <button className='write-btn' onClick={handleWriteClick}>Write</button>
      <div ref={divRef} className='feed-post-container'>
      <input className='feed-input'></input>
      <button>Post</button>
      </div>
      <div className='feed-container'>
      <IndividualTweet />
      <IndividualTweet />
      <IndividualTweet />
      <IndividualTweet />
      <IndividualTweet />
      </div>
    </div>
      
    </>
  )
}

export default Feed

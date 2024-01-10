import React from 'react'
import "./feed.css"
import IndividualTweet from './individualTweet/individualTweet'

function Feed() {
  return (
    <><div className='main-container'>
      <button className='write-btn'>Write</button>
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
